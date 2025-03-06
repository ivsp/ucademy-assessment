export interface EntityFactory<TEntity> {
	create(...args: unknown[]): TEntity | Promise<TEntity>;
}
