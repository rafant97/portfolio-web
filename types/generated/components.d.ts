import type { Schema, Attribute } from '@strapi/strapi';

export interface StackStack extends Schema.Component {
  collectionName: 'components_stack_stacks';
  info: {
    displayName: 'Stack';
    description: '';
  };
  attributes: {
    SkillWork: Attribute.String;
    TechnologiesWorkedYears: Attribute.Component<'technology.technology', true>;
  };
}

export interface TechnologyTechnology extends Schema.Component {
  collectionName: 'components_technology_technologies';
  info: {
    displayName: 'Technology';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    imagen: Attribute.Media;
    Nombre: Attribute.String;
    FechaInicio: Attribute.Integer;
    FechaFin: Attribute.Integer;
    Responsability: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'stack.stack': StackStack;
      'technology.technology': TechnologyTechnology;
    }
  }
}
