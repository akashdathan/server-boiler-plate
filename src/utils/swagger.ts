import { getMetadataArgsStorage } from 'routing-controllers';
import { routingControllersToSpec } from 'routing-controllers-openapi';
import { getFromContainer, MetadataStorage } from 'class-validator';
import { validationMetadatasToSchemas } from 'class-validator-jsonschema';
// tslint:disable-next-line: no-submodule-imports
import { defaultMetadataStorage } from 'class-transformer/storage';

export function getswagger() {
  // tslint:disable-next-line: no-any
  const metadatas = (getFromContainer(MetadataStorage) as any).validationMetadatas;
  const storage = getMetadataArgsStorage();
  const schemas = validationMetadatasToSchemas(metadatas, {
    classTransformerMetadataStorage: defaultMetadataStorage,
    refPointerPrefix: '#/components/schemas/'
  });

  return routingControllersToSpec(storage, {}, {
    components: { 
      schemas,
      securitySchemes: { 
        ApiKeyAuth: { 
          type: 'apiKey',
          in: 'header',
          name: 'Authorization'
        }
      }
    },
    info: { title: 'FT Admin Pannel', version: '1.2.0' }
  });
}
