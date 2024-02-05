import type { Schema, Attribute } from '@strapi/strapi';

export interface FeaturesFeatures extends Schema.Component {
  collectionName: 'components_features_features';
  info: {
    displayName: 'Features';
    icon: 'plus';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    title: Attribute.String;
    description: Attribute.Text;
    price: Attribute.Decimal;
    cost: Attribute.Relation<
      'features.features',
      'oneToOne',
      'api::price.price'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'features.features': FeaturesFeatures;
    }
  }
}
