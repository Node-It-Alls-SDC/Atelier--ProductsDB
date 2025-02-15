const transformProduct = (data) => {
  return data.map( row => ({
    id: parseInt(row['id']),
    name: row['name'],
    slogan: row['slogan'],
    description: row['description'],
    category: row['category'],
    default_price: parseInt(row['default_price']),
    created_at: new Date(),
    updated_at: new Date()
  }))
};

const transformFeatures = (data) => {
  return data.map( row => ({
    id: parseInt(row['id']),
    product_id: parseInt(row['product_id']),
    feature: row['feature'],
    value: row['value']
  }))
};

const transformRelated = (data) => {
  return data.map( row => ({
    id: parseInt(row['id']),
    current_product_id: parseInt(row['current_product_id']),
    related_product_id: parseInt(row['related_product_id'])
  }))
};

const transformSkus = (data) => {
  return data.map( row => ({
    id: parseInt(row['id']),
    styleId: parseInt(row['styleId']),
    size: row['size'],
    quantity: parseInt(row['quantity'])
  }))
};

const transformStyles = (data) => {
  return data.map( row => {
    let salePrice;
    if (row['sale_price'] === 'null') {
      salePrice = null;
    } else {
      salePrice = parseInt(row['sale_price']);
    }

    const item = {
      style_id: parseInt(row['id']),
      product_id: parseInt(row['productId']),
      name: row['name'],
      sale_price: salePrice,
      original_price: parseInt(row['original_price']),
      'default?': parseInt(row['default_style'])
    }
    return item;
  })
};

const transformCart = (data) => {
  return data.map( row => ({
    id: parseInt(row['id']),
    user_session: parseInt(row['user_session']),
    product_id: parseInt(row['product_id']),
    active: parseInt(row['active'])
  }))
};

const transformPhotos = (data) => {
  return data.map( row => ({
    id: parseInt(row['id']),
    styleId: parseInt(row['styleId']),
    url: row['url'],
    thumbnail_url: row['thumbnail_url']
  }))
};

module.exports = { transformProduct, transformFeatures, transformRelated, transformSkus, transformStyles, transformCart, transformPhotos };