import { plantsData } from '../data/plantsData';
import PlantCard from '../components/PlantCard';
import Header from '../components/Header';
import './ProductListPage.css';

const ProductListPage = () => {
  const categories = [...new Set(plantsData.map(plant => plant.category))];

  return (
    <div className="product-list-page">
      <Header />
      <div className="products-container">
        <h1 className="page-title">Our Plant Collection</h1>
        <p className="page-subtitle">
          Discover our premium selection of houseplants to transform your living space
        </p>

        {categories.map((category) => (
          <div key={category} className="category-section">
            <h2 className="category-title">{category}</h2>
            <div className="plants-grid">
              {plantsData
                .filter((plant) => plant.category === category)
                .map((plant) => (
                  <PlantCard key={plant.id} plant={plant} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListPage;
