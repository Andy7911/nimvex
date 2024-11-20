import type { Struct, Schema } from '@strapi/strapi';

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    title: Schema.Attribute.String;
    body: Schema.Attribute.Text;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface ElementsProcessCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_process_cards';
  info: {
    displayName: 'ProcessCard';
  };
  attributes: {
    Headline: Schema.Attribute.String;
    Description: Schema.Attribute.Text;
  };
}

export interface ElementsLinkItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_link_items';
  info: {
    displayName: 'LinkItem';
    description: '';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ElementsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card-service';
    description: '';
  };
  attributes: {
    Title: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    service: Schema.Attribute.Relation<'oneToOne', 'api::service.service'>;
    CTA: Schema.Attribute.Component<'elements.button-icon', false>;
  };
}

export interface ElementsButtonLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_button_links';
  info: {
    displayName: 'Button-link';
    icon: 'code';
  };
  attributes: {
    Text: Schema.Attribute.String;
    Url: Schema.Attribute.String;
    isExternal: Schema.Attribute.Boolean;
    Type: Schema.Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface ElementsButtonIcon extends Struct.ComponentSchema {
  collectionName: 'components_elements_button_icons';
  info: {
    displayName: 'ButtonIcon';
  };
  attributes: {
    TextButton: Schema.Attribute.String;
    Icon: Schema.Attribute.Media<'images'>;
    Url: Schema.Attribute.String;
  };
}

export interface BlocksServices extends Struct.ComponentSchema {
  collectionName: 'components_blocks_services';
  info: {
    displayName: 'Services';
  };
  attributes: {
    Title: Schema.Attribute.String;
    TopParagraph: Schema.Attribute.Text;
    card: Schema.Attribute.Component<'elements.card', true>;
  };
}

export interface BlocksMaketingInfo extends Struct.ComponentSchema {
  collectionName: 'components_blocks_maketing_infos';
  info: {
    displayName: 'MaketingInfo';
    description: '';
  };
  attributes: {
    Image: Schema.Attribute.Media<'images'>;
    Headline: Schema.Attribute.String;
    Paragraphe: Schema.Attribute.Text;
    Btn: Schema.Attribute.Component<'elements.button-link', false>;
    Color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
    description: '';
  };
  attributes: {
    Headline: Schema.Attribute.String;
    Text: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images'>;
    btn: Schema.Attribute.Component<'elements.button-link', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.slider': SharedSlider;
      'shared.seo': SharedSeo;
      'shared.rich-text': SharedRichText;
      'shared.quote': SharedQuote;
      'shared.media': SharedMedia;
      'elements.process-card': ElementsProcessCard;
      'elements.link-item': ElementsLinkItem;
      'elements.card': ElementsCard;
      'elements.button-link': ElementsButtonLink;
      'elements.button-icon': ElementsButtonIcon;
      'blocks.services': BlocksServices;
      'blocks.maketing-info': BlocksMaketingInfo;
      'blocks.hero': BlocksHero;
    }
  }
}
