import {EntityCombinator, sequelizeSchemaPool} from '../core';
/**
 * Decorator for @Entity
 * here we compose all the metadata into SequelizeEntityPool.
 * Everytime, it just composes its own Entity. 
 * 
 * @export
 * @param {*} target
 */
export function Entity(target: any) {
  let entityName: string = (target.name as string).toLowerCase();
  let entity = EntityCombinator.compose(entityName);
  sequelizeSchemaPool.put(entity.name, entity);
}