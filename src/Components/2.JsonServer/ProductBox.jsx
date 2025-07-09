import React from 'react';

const ProductBox = ({ product }) => {
  return (
    <div className="product-card">
      <div className="badges">
        {product.discount > 0 && (
          <span className="discount-badge">{product.discount}% تخفیف</span>
        )}
        {product.isNew && <span className="new-badge">جدید</span>}
      </div>
      
      <img 
        src={`/JsonServer/${product.image}`}
        alt={product.name} 
        className="product-image"
        style={{ height: 300 }}
      />
      
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        <div className="rating">
          {'★'.repeat(product.rating)}{'☆'.repeat(5 - product.rating)}
          <span>({product.reviews})</span>
        </div>
        
        <div className="price-container">
          {product.discount > 0 ? (
            <>
              <span className="original-price">{product.price.toLocaleString()} تومان</span>
              <span className="final-price">
                {(product.price * (1 - product.discount / 100)).toLocaleString()} تومان
              </span>
            </>
          ) : (
            <span className="final-price">{product.price.toLocaleString()} تومان</span>
          )}
        </div>
        
        <button className="add-to-cart">+ افزودن به سبد</button>
      </div>
    </div>
  );
};

export default ProductBox;