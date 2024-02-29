
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Materi
 * 
 */
export type Materi = $Result.DefaultSelection<Prisma.$MateriPayload>
/**
 * Model Tugas
 * 
 */
export type Tugas = $Result.DefaultSelection<Prisma.$TugasPayload>
/**
 * Model TugasMurid
 * 
 */
export type TugasMurid = $Result.DefaultSelection<Prisma.$TugasMuridPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Materis
 * const materis = await prisma.materi.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Materis
   * const materis = await prisma.materi.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.materi`: Exposes CRUD operations for the **Materi** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Materis
    * const materis = await prisma.materi.findMany()
    * ```
    */
  get materi(): Prisma.MateriDelegate<ExtArgs>;

  /**
   * `prisma.tugas`: Exposes CRUD operations for the **Tugas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tugases
    * const tugases = await prisma.tugas.findMany()
    * ```
    */
  get tugas(): Prisma.TugasDelegate<ExtArgs>;

  /**
   * `prisma.tugasMurid`: Exposes CRUD operations for the **TugasMurid** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TugasMurids
    * const tugasMurids = await prisma.tugasMurid.findMany()
    * ```
    */
  get tugasMurid(): Prisma.TugasMuridDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.8.1
   * Query Engine version: 23fdc5965b1e05fc54e5f26ed3de66776b93de64
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Materi: 'Materi',
    Tugas: 'Tugas',
    TugasMurid: 'TugasMurid'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'materi' | 'tugas' | 'tugasMurid'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Materi: {
        payload: Prisma.$MateriPayload<ExtArgs>
        fields: Prisma.MateriFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MateriFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MateriPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MateriFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MateriPayload>
          }
          findFirst: {
            args: Prisma.MateriFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MateriPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MateriFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MateriPayload>
          }
          findMany: {
            args: Prisma.MateriFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MateriPayload>[]
          }
          create: {
            args: Prisma.MateriCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MateriPayload>
          }
          createMany: {
            args: Prisma.MateriCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MateriDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MateriPayload>
          }
          update: {
            args: Prisma.MateriUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MateriPayload>
          }
          deleteMany: {
            args: Prisma.MateriDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MateriUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MateriUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MateriPayload>
          }
          aggregate: {
            args: Prisma.MateriAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMateri>
          }
          groupBy: {
            args: Prisma.MateriGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MateriGroupByOutputType>[]
          }
          count: {
            args: Prisma.MateriCountArgs<ExtArgs>,
            result: $Utils.Optional<MateriCountAggregateOutputType> | number
          }
        }
      }
      Tugas: {
        payload: Prisma.$TugasPayload<ExtArgs>
        fields: Prisma.TugasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TugasFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TugasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TugasFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TugasPayload>
          }
          findFirst: {
            args: Prisma.TugasFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TugasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TugasFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TugasPayload>
          }
          findMany: {
            args: Prisma.TugasFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TugasPayload>[]
          }
          create: {
            args: Prisma.TugasCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TugasPayload>
          }
          createMany: {
            args: Prisma.TugasCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TugasDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TugasPayload>
          }
          update: {
            args: Prisma.TugasUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TugasPayload>
          }
          deleteMany: {
            args: Prisma.TugasDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TugasUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TugasUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TugasPayload>
          }
          aggregate: {
            args: Prisma.TugasAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTugas>
          }
          groupBy: {
            args: Prisma.TugasGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TugasGroupByOutputType>[]
          }
          count: {
            args: Prisma.TugasCountArgs<ExtArgs>,
            result: $Utils.Optional<TugasCountAggregateOutputType> | number
          }
        }
      }
      TugasMurid: {
        payload: Prisma.$TugasMuridPayload<ExtArgs>
        fields: Prisma.TugasMuridFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TugasMuridFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TugasMuridPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TugasMuridFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TugasMuridPayload>
          }
          findFirst: {
            args: Prisma.TugasMuridFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TugasMuridPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TugasMuridFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TugasMuridPayload>
          }
          findMany: {
            args: Prisma.TugasMuridFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TugasMuridPayload>[]
          }
          create: {
            args: Prisma.TugasMuridCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TugasMuridPayload>
          }
          createMany: {
            args: Prisma.TugasMuridCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TugasMuridDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TugasMuridPayload>
          }
          update: {
            args: Prisma.TugasMuridUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TugasMuridPayload>
          }
          deleteMany: {
            args: Prisma.TugasMuridDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TugasMuridUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TugasMuridUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TugasMuridPayload>
          }
          aggregate: {
            args: Prisma.TugasMuridAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTugasMurid>
          }
          groupBy: {
            args: Prisma.TugasMuridGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TugasMuridGroupByOutputType>[]
          }
          count: {
            args: Prisma.TugasMuridCountArgs<ExtArgs>,
            result: $Utils.Optional<TugasMuridCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TugasCountOutputType
   */

  export type TugasCountOutputType = {
    tugasMurid: number
  }

  export type TugasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tugasMurid?: boolean | TugasCountOutputTypeCountTugasMuridArgs
  }

  // Custom InputTypes

  /**
   * TugasCountOutputType without action
   */
  export type TugasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TugasCountOutputType
     */
    select?: TugasCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TugasCountOutputType without action
   */
  export type TugasCountOutputTypeCountTugasMuridArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TugasMuridWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Materi
   */

  export type AggregateMateri = {
    _count: MateriCountAggregateOutputType | null
    _min: MateriMinAggregateOutputType | null
    _max: MateriMaxAggregateOutputType | null
  }

  export type MateriMinAggregateOutputType = {
    id: string | null
    mataPelajaran: string | null
    materi: string | null
    judul: string | null
    isi: string | null
    filePath: string | null
    namaUser: string | null
  }

  export type MateriMaxAggregateOutputType = {
    id: string | null
    mataPelajaran: string | null
    materi: string | null
    judul: string | null
    isi: string | null
    filePath: string | null
    namaUser: string | null
  }

  export type MateriCountAggregateOutputType = {
    id: number
    mataPelajaran: number
    materi: number
    judul: number
    isi: number
    filePath: number
    namaUser: number
    _all: number
  }


  export type MateriMinAggregateInputType = {
    id?: true
    mataPelajaran?: true
    materi?: true
    judul?: true
    isi?: true
    filePath?: true
    namaUser?: true
  }

  export type MateriMaxAggregateInputType = {
    id?: true
    mataPelajaran?: true
    materi?: true
    judul?: true
    isi?: true
    filePath?: true
    namaUser?: true
  }

  export type MateriCountAggregateInputType = {
    id?: true
    mataPelajaran?: true
    materi?: true
    judul?: true
    isi?: true
    filePath?: true
    namaUser?: true
    _all?: true
  }

  export type MateriAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materi to aggregate.
     */
    where?: MateriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materis to fetch.
     */
    orderBy?: MateriOrderByWithRelationInput | MateriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MateriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Materis
    **/
    _count?: true | MateriCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MateriMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MateriMaxAggregateInputType
  }

  export type GetMateriAggregateType<T extends MateriAggregateArgs> = {
        [P in keyof T & keyof AggregateMateri]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMateri[P]>
      : GetScalarType<T[P], AggregateMateri[P]>
  }




  export type MateriGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MateriWhereInput
    orderBy?: MateriOrderByWithAggregationInput | MateriOrderByWithAggregationInput[]
    by: MateriScalarFieldEnum[] | MateriScalarFieldEnum
    having?: MateriScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MateriCountAggregateInputType | true
    _min?: MateriMinAggregateInputType
    _max?: MateriMaxAggregateInputType
  }

  export type MateriGroupByOutputType = {
    id: string
    mataPelajaran: string
    materi: string
    judul: string
    isi: string
    filePath: string
    namaUser: string
    _count: MateriCountAggregateOutputType | null
    _min: MateriMinAggregateOutputType | null
    _max: MateriMaxAggregateOutputType | null
  }

  type GetMateriGroupByPayload<T extends MateriGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MateriGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MateriGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MateriGroupByOutputType[P]>
            : GetScalarType<T[P], MateriGroupByOutputType[P]>
        }
      >
    >


  export type MateriSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mataPelajaran?: boolean
    materi?: boolean
    judul?: boolean
    isi?: boolean
    filePath?: boolean
    namaUser?: boolean
  }, ExtArgs["result"]["materi"]>

  export type MateriSelectScalar = {
    id?: boolean
    mataPelajaran?: boolean
    materi?: boolean
    judul?: boolean
    isi?: boolean
    filePath?: boolean
    namaUser?: boolean
  }


  export type $MateriPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Materi"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mataPelajaran: string
      materi: string
      judul: string
      isi: string
      filePath: string
      namaUser: string
    }, ExtArgs["result"]["materi"]>
    composites: {}
  }


  type MateriGetPayload<S extends boolean | null | undefined | MateriDefaultArgs> = $Result.GetResult<Prisma.$MateriPayload, S>

  type MateriCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MateriFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MateriCountAggregateInputType | true
    }

  export interface MateriDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Materi'], meta: { name: 'Materi' } }
    /**
     * Find zero or one Materi that matches the filter.
     * @param {MateriFindUniqueArgs} args - Arguments to find a Materi
     * @example
     * // Get one Materi
     * const materi = await prisma.materi.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MateriFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MateriFindUniqueArgs<ExtArgs>>
    ): Prisma__MateriClient<$Result.GetResult<Prisma.$MateriPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Materi that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MateriFindUniqueOrThrowArgs} args - Arguments to find a Materi
     * @example
     * // Get one Materi
     * const materi = await prisma.materi.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MateriFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MateriFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MateriClient<$Result.GetResult<Prisma.$MateriPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Materi that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriFindFirstArgs} args - Arguments to find a Materi
     * @example
     * // Get one Materi
     * const materi = await prisma.materi.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MateriFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MateriFindFirstArgs<ExtArgs>>
    ): Prisma__MateriClient<$Result.GetResult<Prisma.$MateriPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Materi that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriFindFirstOrThrowArgs} args - Arguments to find a Materi
     * @example
     * // Get one Materi
     * const materi = await prisma.materi.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MateriFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MateriFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MateriClient<$Result.GetResult<Prisma.$MateriPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Materis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Materis
     * const materis = await prisma.materi.findMany()
     * 
     * // Get first 10 Materis
     * const materis = await prisma.materi.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const materiWithIdOnly = await prisma.materi.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MateriFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MateriFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MateriPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Materi.
     * @param {MateriCreateArgs} args - Arguments to create a Materi.
     * @example
     * // Create one Materi
     * const Materi = await prisma.materi.create({
     *   data: {
     *     // ... data to create a Materi
     *   }
     * })
     * 
    **/
    create<T extends MateriCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MateriCreateArgs<ExtArgs>>
    ): Prisma__MateriClient<$Result.GetResult<Prisma.$MateriPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Materis.
     *     @param {MateriCreateManyArgs} args - Arguments to create many Materis.
     *     @example
     *     // Create many Materis
     *     const materi = await prisma.materi.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MateriCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MateriCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Materi.
     * @param {MateriDeleteArgs} args - Arguments to delete one Materi.
     * @example
     * // Delete one Materi
     * const Materi = await prisma.materi.delete({
     *   where: {
     *     // ... filter to delete one Materi
     *   }
     * })
     * 
    **/
    delete<T extends MateriDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MateriDeleteArgs<ExtArgs>>
    ): Prisma__MateriClient<$Result.GetResult<Prisma.$MateriPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Materi.
     * @param {MateriUpdateArgs} args - Arguments to update one Materi.
     * @example
     * // Update one Materi
     * const materi = await prisma.materi.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MateriUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MateriUpdateArgs<ExtArgs>>
    ): Prisma__MateriClient<$Result.GetResult<Prisma.$MateriPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Materis.
     * @param {MateriDeleteManyArgs} args - Arguments to filter Materis to delete.
     * @example
     * // Delete a few Materis
     * const { count } = await prisma.materi.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MateriDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MateriDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Materis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Materis
     * const materi = await prisma.materi.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MateriUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MateriUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Materi.
     * @param {MateriUpsertArgs} args - Arguments to update or create a Materi.
     * @example
     * // Update or create a Materi
     * const materi = await prisma.materi.upsert({
     *   create: {
     *     // ... data to create a Materi
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Materi we want to update
     *   }
     * })
    **/
    upsert<T extends MateriUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MateriUpsertArgs<ExtArgs>>
    ): Prisma__MateriClient<$Result.GetResult<Prisma.$MateriPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Materis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriCountArgs} args - Arguments to filter Materis to count.
     * @example
     * // Count the number of Materis
     * const count = await prisma.materi.count({
     *   where: {
     *     // ... the filter for the Materis we want to count
     *   }
     * })
    **/
    count<T extends MateriCountArgs>(
      args?: Subset<T, MateriCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MateriCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Materi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MateriAggregateArgs>(args: Subset<T, MateriAggregateArgs>): Prisma.PrismaPromise<GetMateriAggregateType<T>>

    /**
     * Group by Materi.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MateriGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MateriGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MateriGroupByArgs['orderBy'] }
        : { orderBy?: MateriGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MateriGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMateriGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Materi model
   */
  readonly fields: MateriFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Materi.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MateriClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Materi model
   */ 
  interface MateriFieldRefs {
    readonly id: FieldRef<"Materi", 'String'>
    readonly mataPelajaran: FieldRef<"Materi", 'String'>
    readonly materi: FieldRef<"Materi", 'String'>
    readonly judul: FieldRef<"Materi", 'String'>
    readonly isi: FieldRef<"Materi", 'String'>
    readonly filePath: FieldRef<"Materi", 'String'>
    readonly namaUser: FieldRef<"Materi", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Materi findUnique
   */
  export type MateriFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materi
     */
    select?: MateriSelect<ExtArgs> | null
    /**
     * Filter, which Materi to fetch.
     */
    where: MateriWhereUniqueInput
  }


  /**
   * Materi findUniqueOrThrow
   */
  export type MateriFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materi
     */
    select?: MateriSelect<ExtArgs> | null
    /**
     * Filter, which Materi to fetch.
     */
    where: MateriWhereUniqueInput
  }


  /**
   * Materi findFirst
   */
  export type MateriFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materi
     */
    select?: MateriSelect<ExtArgs> | null
    /**
     * Filter, which Materi to fetch.
     */
    where?: MateriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materis to fetch.
     */
    orderBy?: MateriOrderByWithRelationInput | MateriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materis.
     */
    cursor?: MateriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materis.
     */
    distinct?: MateriScalarFieldEnum | MateriScalarFieldEnum[]
  }


  /**
   * Materi findFirstOrThrow
   */
  export type MateriFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materi
     */
    select?: MateriSelect<ExtArgs> | null
    /**
     * Filter, which Materi to fetch.
     */
    where?: MateriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materis to fetch.
     */
    orderBy?: MateriOrderByWithRelationInput | MateriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Materis.
     */
    cursor?: MateriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Materis.
     */
    distinct?: MateriScalarFieldEnum | MateriScalarFieldEnum[]
  }


  /**
   * Materi findMany
   */
  export type MateriFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materi
     */
    select?: MateriSelect<ExtArgs> | null
    /**
     * Filter, which Materis to fetch.
     */
    where?: MateriWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Materis to fetch.
     */
    orderBy?: MateriOrderByWithRelationInput | MateriOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Materis.
     */
    cursor?: MateriWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Materis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Materis.
     */
    skip?: number
    distinct?: MateriScalarFieldEnum | MateriScalarFieldEnum[]
  }


  /**
   * Materi create
   */
  export type MateriCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materi
     */
    select?: MateriSelect<ExtArgs> | null
    /**
     * The data needed to create a Materi.
     */
    data: XOR<MateriCreateInput, MateriUncheckedCreateInput>
  }


  /**
   * Materi createMany
   */
  export type MateriCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Materis.
     */
    data: MateriCreateManyInput | MateriCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Materi update
   */
  export type MateriUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materi
     */
    select?: MateriSelect<ExtArgs> | null
    /**
     * The data needed to update a Materi.
     */
    data: XOR<MateriUpdateInput, MateriUncheckedUpdateInput>
    /**
     * Choose, which Materi to update.
     */
    where: MateriWhereUniqueInput
  }


  /**
   * Materi updateMany
   */
  export type MateriUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Materis.
     */
    data: XOR<MateriUpdateManyMutationInput, MateriUncheckedUpdateManyInput>
    /**
     * Filter which Materis to update
     */
    where?: MateriWhereInput
  }


  /**
   * Materi upsert
   */
  export type MateriUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materi
     */
    select?: MateriSelect<ExtArgs> | null
    /**
     * The filter to search for the Materi to update in case it exists.
     */
    where: MateriWhereUniqueInput
    /**
     * In case the Materi found by the `where` argument doesn't exist, create a new Materi with this data.
     */
    create: XOR<MateriCreateInput, MateriUncheckedCreateInput>
    /**
     * In case the Materi was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MateriUpdateInput, MateriUncheckedUpdateInput>
  }


  /**
   * Materi delete
   */
  export type MateriDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materi
     */
    select?: MateriSelect<ExtArgs> | null
    /**
     * Filter which Materi to delete.
     */
    where: MateriWhereUniqueInput
  }


  /**
   * Materi deleteMany
   */
  export type MateriDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Materis to delete
     */
    where?: MateriWhereInput
  }


  /**
   * Materi without action
   */
  export type MateriDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Materi
     */
    select?: MateriSelect<ExtArgs> | null
  }



  /**
   * Model Tugas
   */

  export type AggregateTugas = {
    _count: TugasCountAggregateOutputType | null
    _min: TugasMinAggregateOutputType | null
    _max: TugasMaxAggregateOutputType | null
  }

  export type TugasMinAggregateOutputType = {
    id: string | null
    mataPelajaran: string | null
    materi: string | null
    judul: string | null
    isi: string | null
    tanggalPengumpulan: Date | null
    namaUser: string | null
  }

  export type TugasMaxAggregateOutputType = {
    id: string | null
    mataPelajaran: string | null
    materi: string | null
    judul: string | null
    isi: string | null
    tanggalPengumpulan: Date | null
    namaUser: string | null
  }

  export type TugasCountAggregateOutputType = {
    id: number
    mataPelajaran: number
    materi: number
    judul: number
    isi: number
    tanggalPengumpulan: number
    namaUser: number
    _all: number
  }


  export type TugasMinAggregateInputType = {
    id?: true
    mataPelajaran?: true
    materi?: true
    judul?: true
    isi?: true
    tanggalPengumpulan?: true
    namaUser?: true
  }

  export type TugasMaxAggregateInputType = {
    id?: true
    mataPelajaran?: true
    materi?: true
    judul?: true
    isi?: true
    tanggalPengumpulan?: true
    namaUser?: true
  }

  export type TugasCountAggregateInputType = {
    id?: true
    mataPelajaran?: true
    materi?: true
    judul?: true
    isi?: true
    tanggalPengumpulan?: true
    namaUser?: true
    _all?: true
  }

  export type TugasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tugas to aggregate.
     */
    where?: TugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tugases to fetch.
     */
    orderBy?: TugasOrderByWithRelationInput | TugasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tugases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tugases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tugases
    **/
    _count?: true | TugasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TugasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TugasMaxAggregateInputType
  }

  export type GetTugasAggregateType<T extends TugasAggregateArgs> = {
        [P in keyof T & keyof AggregateTugas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTugas[P]>
      : GetScalarType<T[P], AggregateTugas[P]>
  }




  export type TugasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TugasWhereInput
    orderBy?: TugasOrderByWithAggregationInput | TugasOrderByWithAggregationInput[]
    by: TugasScalarFieldEnum[] | TugasScalarFieldEnum
    having?: TugasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TugasCountAggregateInputType | true
    _min?: TugasMinAggregateInputType
    _max?: TugasMaxAggregateInputType
  }

  export type TugasGroupByOutputType = {
    id: string
    mataPelajaran: string
    materi: string
    judul: string
    isi: string
    tanggalPengumpulan: Date
    namaUser: string
    _count: TugasCountAggregateOutputType | null
    _min: TugasMinAggregateOutputType | null
    _max: TugasMaxAggregateOutputType | null
  }

  type GetTugasGroupByPayload<T extends TugasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TugasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TugasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TugasGroupByOutputType[P]>
            : GetScalarType<T[P], TugasGroupByOutputType[P]>
        }
      >
    >


  export type TugasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mataPelajaran?: boolean
    materi?: boolean
    judul?: boolean
    isi?: boolean
    tanggalPengumpulan?: boolean
    namaUser?: boolean
    tugasMurid?: boolean | Tugas$tugasMuridArgs<ExtArgs>
    _count?: boolean | TugasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tugas"]>

  export type TugasSelectScalar = {
    id?: boolean
    mataPelajaran?: boolean
    materi?: boolean
    judul?: boolean
    isi?: boolean
    tanggalPengumpulan?: boolean
    namaUser?: boolean
  }

  export type TugasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tugasMurid?: boolean | Tugas$tugasMuridArgs<ExtArgs>
    _count?: boolean | TugasCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TugasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tugas"
    objects: {
      tugasMurid: Prisma.$TugasMuridPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mataPelajaran: string
      materi: string
      judul: string
      isi: string
      tanggalPengumpulan: Date
      namaUser: string
    }, ExtArgs["result"]["tugas"]>
    composites: {}
  }


  type TugasGetPayload<S extends boolean | null | undefined | TugasDefaultArgs> = $Result.GetResult<Prisma.$TugasPayload, S>

  type TugasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TugasFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TugasCountAggregateInputType | true
    }

  export interface TugasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tugas'], meta: { name: 'Tugas' } }
    /**
     * Find zero or one Tugas that matches the filter.
     * @param {TugasFindUniqueArgs} args - Arguments to find a Tugas
     * @example
     * // Get one Tugas
     * const tugas = await prisma.tugas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TugasFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TugasFindUniqueArgs<ExtArgs>>
    ): Prisma__TugasClient<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Tugas that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TugasFindUniqueOrThrowArgs} args - Arguments to find a Tugas
     * @example
     * // Get one Tugas
     * const tugas = await prisma.tugas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TugasFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TugasFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TugasClient<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Tugas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasFindFirstArgs} args - Arguments to find a Tugas
     * @example
     * // Get one Tugas
     * const tugas = await prisma.tugas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TugasFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TugasFindFirstArgs<ExtArgs>>
    ): Prisma__TugasClient<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Tugas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasFindFirstOrThrowArgs} args - Arguments to find a Tugas
     * @example
     * // Get one Tugas
     * const tugas = await prisma.tugas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TugasFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TugasFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TugasClient<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tugases that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tugases
     * const tugases = await prisma.tugas.findMany()
     * 
     * // Get first 10 Tugases
     * const tugases = await prisma.tugas.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tugasWithIdOnly = await prisma.tugas.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TugasFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TugasFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Tugas.
     * @param {TugasCreateArgs} args - Arguments to create a Tugas.
     * @example
     * // Create one Tugas
     * const Tugas = await prisma.tugas.create({
     *   data: {
     *     // ... data to create a Tugas
     *   }
     * })
     * 
    **/
    create<T extends TugasCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TugasCreateArgs<ExtArgs>>
    ): Prisma__TugasClient<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tugases.
     *     @param {TugasCreateManyArgs} args - Arguments to create many Tugases.
     *     @example
     *     // Create many Tugases
     *     const tugas = await prisma.tugas.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TugasCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TugasCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tugas.
     * @param {TugasDeleteArgs} args - Arguments to delete one Tugas.
     * @example
     * // Delete one Tugas
     * const Tugas = await prisma.tugas.delete({
     *   where: {
     *     // ... filter to delete one Tugas
     *   }
     * })
     * 
    **/
    delete<T extends TugasDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TugasDeleteArgs<ExtArgs>>
    ): Prisma__TugasClient<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Tugas.
     * @param {TugasUpdateArgs} args - Arguments to update one Tugas.
     * @example
     * // Update one Tugas
     * const tugas = await prisma.tugas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TugasUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TugasUpdateArgs<ExtArgs>>
    ): Prisma__TugasClient<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tugases.
     * @param {TugasDeleteManyArgs} args - Arguments to filter Tugases to delete.
     * @example
     * // Delete a few Tugases
     * const { count } = await prisma.tugas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TugasDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TugasDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tugases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tugases
     * const tugas = await prisma.tugas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TugasUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TugasUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tugas.
     * @param {TugasUpsertArgs} args - Arguments to update or create a Tugas.
     * @example
     * // Update or create a Tugas
     * const tugas = await prisma.tugas.upsert({
     *   create: {
     *     // ... data to create a Tugas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tugas we want to update
     *   }
     * })
    **/
    upsert<T extends TugasUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TugasUpsertArgs<ExtArgs>>
    ): Prisma__TugasClient<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Tugases.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasCountArgs} args - Arguments to filter Tugases to count.
     * @example
     * // Count the number of Tugases
     * const count = await prisma.tugas.count({
     *   where: {
     *     // ... the filter for the Tugases we want to count
     *   }
     * })
    **/
    count<T extends TugasCountArgs>(
      args?: Subset<T, TugasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TugasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tugas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TugasAggregateArgs>(args: Subset<T, TugasAggregateArgs>): Prisma.PrismaPromise<GetTugasAggregateType<T>>

    /**
     * Group by Tugas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TugasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TugasGroupByArgs['orderBy'] }
        : { orderBy?: TugasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TugasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTugasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tugas model
   */
  readonly fields: TugasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tugas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TugasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tugasMurid<T extends Tugas$tugasMuridArgs<ExtArgs> = {}>(args?: Subset<T, Tugas$tugasMuridArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TugasMuridPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Tugas model
   */ 
  interface TugasFieldRefs {
    readonly id: FieldRef<"Tugas", 'String'>
    readonly mataPelajaran: FieldRef<"Tugas", 'String'>
    readonly materi: FieldRef<"Tugas", 'String'>
    readonly judul: FieldRef<"Tugas", 'String'>
    readonly isi: FieldRef<"Tugas", 'String'>
    readonly tanggalPengumpulan: FieldRef<"Tugas", 'DateTime'>
    readonly namaUser: FieldRef<"Tugas", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Tugas findUnique
   */
  export type TugasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TugasInclude<ExtArgs> | null
    /**
     * Filter, which Tugas to fetch.
     */
    where: TugasWhereUniqueInput
  }


  /**
   * Tugas findUniqueOrThrow
   */
  export type TugasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TugasInclude<ExtArgs> | null
    /**
     * Filter, which Tugas to fetch.
     */
    where: TugasWhereUniqueInput
  }


  /**
   * Tugas findFirst
   */
  export type TugasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TugasInclude<ExtArgs> | null
    /**
     * Filter, which Tugas to fetch.
     */
    where?: TugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tugases to fetch.
     */
    orderBy?: TugasOrderByWithRelationInput | TugasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tugases.
     */
    cursor?: TugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tugases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tugases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tugases.
     */
    distinct?: TugasScalarFieldEnum | TugasScalarFieldEnum[]
  }


  /**
   * Tugas findFirstOrThrow
   */
  export type TugasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TugasInclude<ExtArgs> | null
    /**
     * Filter, which Tugas to fetch.
     */
    where?: TugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tugases to fetch.
     */
    orderBy?: TugasOrderByWithRelationInput | TugasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tugases.
     */
    cursor?: TugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tugases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tugases.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tugases.
     */
    distinct?: TugasScalarFieldEnum | TugasScalarFieldEnum[]
  }


  /**
   * Tugas findMany
   */
  export type TugasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TugasInclude<ExtArgs> | null
    /**
     * Filter, which Tugases to fetch.
     */
    where?: TugasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tugases to fetch.
     */
    orderBy?: TugasOrderByWithRelationInput | TugasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tugases.
     */
    cursor?: TugasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tugases from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tugases.
     */
    skip?: number
    distinct?: TugasScalarFieldEnum | TugasScalarFieldEnum[]
  }


  /**
   * Tugas create
   */
  export type TugasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TugasInclude<ExtArgs> | null
    /**
     * The data needed to create a Tugas.
     */
    data: XOR<TugasCreateInput, TugasUncheckedCreateInput>
  }


  /**
   * Tugas createMany
   */
  export type TugasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tugases.
     */
    data: TugasCreateManyInput | TugasCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Tugas update
   */
  export type TugasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TugasInclude<ExtArgs> | null
    /**
     * The data needed to update a Tugas.
     */
    data: XOR<TugasUpdateInput, TugasUncheckedUpdateInput>
    /**
     * Choose, which Tugas to update.
     */
    where: TugasWhereUniqueInput
  }


  /**
   * Tugas updateMany
   */
  export type TugasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tugases.
     */
    data: XOR<TugasUpdateManyMutationInput, TugasUncheckedUpdateManyInput>
    /**
     * Filter which Tugases to update
     */
    where?: TugasWhereInput
  }


  /**
   * Tugas upsert
   */
  export type TugasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TugasInclude<ExtArgs> | null
    /**
     * The filter to search for the Tugas to update in case it exists.
     */
    where: TugasWhereUniqueInput
    /**
     * In case the Tugas found by the `where` argument doesn't exist, create a new Tugas with this data.
     */
    create: XOR<TugasCreateInput, TugasUncheckedCreateInput>
    /**
     * In case the Tugas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TugasUpdateInput, TugasUncheckedUpdateInput>
  }


  /**
   * Tugas delete
   */
  export type TugasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TugasInclude<ExtArgs> | null
    /**
     * Filter which Tugas to delete.
     */
    where: TugasWhereUniqueInput
  }


  /**
   * Tugas deleteMany
   */
  export type TugasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tugases to delete
     */
    where?: TugasWhereInput
  }


  /**
   * Tugas.tugasMurid
   */
  export type Tugas$tugasMuridArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TugasMurid
     */
    select?: TugasMuridSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TugasMuridInclude<ExtArgs> | null
    where?: TugasMuridWhereInput
    orderBy?: TugasMuridOrderByWithRelationInput | TugasMuridOrderByWithRelationInput[]
    cursor?: TugasMuridWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TugasMuridScalarFieldEnum | TugasMuridScalarFieldEnum[]
  }


  /**
   * Tugas without action
   */
  export type TugasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tugas
     */
    select?: TugasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TugasInclude<ExtArgs> | null
  }



  /**
   * Model TugasMurid
   */

  export type AggregateTugasMurid = {
    _count: TugasMuridCountAggregateOutputType | null
    _avg: TugasMuridAvgAggregateOutputType | null
    _sum: TugasMuridSumAggregateOutputType | null
    _min: TugasMuridMinAggregateOutputType | null
    _max: TugasMuridMaxAggregateOutputType | null
  }

  export type TugasMuridAvgAggregateOutputType = {
    nilai: number | null
  }

  export type TugasMuridSumAggregateOutputType = {
    nilai: number | null
  }

  export type TugasMuridMinAggregateOutputType = {
    id: string | null
    mataPelajaran: string | null
    materi: string | null
    judul: string | null
    isi: string | null
    filePath: string | null
    namaUser: string | null
    nilai: number | null
    idTugas: string | null
    komentar: string | null
  }

  export type TugasMuridMaxAggregateOutputType = {
    id: string | null
    mataPelajaran: string | null
    materi: string | null
    judul: string | null
    isi: string | null
    filePath: string | null
    namaUser: string | null
    nilai: number | null
    idTugas: string | null
    komentar: string | null
  }

  export type TugasMuridCountAggregateOutputType = {
    id: number
    mataPelajaran: number
    materi: number
    judul: number
    isi: number
    filePath: number
    namaUser: number
    nilai: number
    idTugas: number
    komentar: number
    _all: number
  }


  export type TugasMuridAvgAggregateInputType = {
    nilai?: true
  }

  export type TugasMuridSumAggregateInputType = {
    nilai?: true
  }

  export type TugasMuridMinAggregateInputType = {
    id?: true
    mataPelajaran?: true
    materi?: true
    judul?: true
    isi?: true
    filePath?: true
    namaUser?: true
    nilai?: true
    idTugas?: true
    komentar?: true
  }

  export type TugasMuridMaxAggregateInputType = {
    id?: true
    mataPelajaran?: true
    materi?: true
    judul?: true
    isi?: true
    filePath?: true
    namaUser?: true
    nilai?: true
    idTugas?: true
    komentar?: true
  }

  export type TugasMuridCountAggregateInputType = {
    id?: true
    mataPelajaran?: true
    materi?: true
    judul?: true
    isi?: true
    filePath?: true
    namaUser?: true
    nilai?: true
    idTugas?: true
    komentar?: true
    _all?: true
  }

  export type TugasMuridAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TugasMurid to aggregate.
     */
    where?: TugasMuridWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TugasMurids to fetch.
     */
    orderBy?: TugasMuridOrderByWithRelationInput | TugasMuridOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TugasMuridWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TugasMurids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TugasMurids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TugasMurids
    **/
    _count?: true | TugasMuridCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TugasMuridAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TugasMuridSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TugasMuridMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TugasMuridMaxAggregateInputType
  }

  export type GetTugasMuridAggregateType<T extends TugasMuridAggregateArgs> = {
        [P in keyof T & keyof AggregateTugasMurid]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTugasMurid[P]>
      : GetScalarType<T[P], AggregateTugasMurid[P]>
  }




  export type TugasMuridGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TugasMuridWhereInput
    orderBy?: TugasMuridOrderByWithAggregationInput | TugasMuridOrderByWithAggregationInput[]
    by: TugasMuridScalarFieldEnum[] | TugasMuridScalarFieldEnum
    having?: TugasMuridScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TugasMuridCountAggregateInputType | true
    _avg?: TugasMuridAvgAggregateInputType
    _sum?: TugasMuridSumAggregateInputType
    _min?: TugasMuridMinAggregateInputType
    _max?: TugasMuridMaxAggregateInputType
  }

  export type TugasMuridGroupByOutputType = {
    id: string
    mataPelajaran: string | null
    materi: string | null
    judul: string | null
    isi: string
    filePath: string
    namaUser: string
    nilai: number | null
    idTugas: string
    komentar: string | null
    _count: TugasMuridCountAggregateOutputType | null
    _avg: TugasMuridAvgAggregateOutputType | null
    _sum: TugasMuridSumAggregateOutputType | null
    _min: TugasMuridMinAggregateOutputType | null
    _max: TugasMuridMaxAggregateOutputType | null
  }

  type GetTugasMuridGroupByPayload<T extends TugasMuridGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TugasMuridGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TugasMuridGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TugasMuridGroupByOutputType[P]>
            : GetScalarType<T[P], TugasMuridGroupByOutputType[P]>
        }
      >
    >


  export type TugasMuridSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    mataPelajaran?: boolean
    materi?: boolean
    judul?: boolean
    isi?: boolean
    filePath?: boolean
    namaUser?: boolean
    nilai?: boolean
    idTugas?: boolean
    komentar?: boolean
    tugas?: boolean | TugasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tugasMurid"]>

  export type TugasMuridSelectScalar = {
    id?: boolean
    mataPelajaran?: boolean
    materi?: boolean
    judul?: boolean
    isi?: boolean
    filePath?: boolean
    namaUser?: boolean
    nilai?: boolean
    idTugas?: boolean
    komentar?: boolean
  }

  export type TugasMuridInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tugas?: boolean | TugasDefaultArgs<ExtArgs>
  }


  export type $TugasMuridPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TugasMurid"
    objects: {
      tugas: Prisma.$TugasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      mataPelajaran: string | null
      materi: string | null
      judul: string | null
      isi: string
      filePath: string
      namaUser: string
      nilai: number | null
      idTugas: string
      komentar: string | null
    }, ExtArgs["result"]["tugasMurid"]>
    composites: {}
  }


  type TugasMuridGetPayload<S extends boolean | null | undefined | TugasMuridDefaultArgs> = $Result.GetResult<Prisma.$TugasMuridPayload, S>

  type TugasMuridCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TugasMuridFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TugasMuridCountAggregateInputType | true
    }

  export interface TugasMuridDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TugasMurid'], meta: { name: 'TugasMurid' } }
    /**
     * Find zero or one TugasMurid that matches the filter.
     * @param {TugasMuridFindUniqueArgs} args - Arguments to find a TugasMurid
     * @example
     * // Get one TugasMurid
     * const tugasMurid = await prisma.tugasMurid.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TugasMuridFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TugasMuridFindUniqueArgs<ExtArgs>>
    ): Prisma__TugasMuridClient<$Result.GetResult<Prisma.$TugasMuridPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TugasMurid that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TugasMuridFindUniqueOrThrowArgs} args - Arguments to find a TugasMurid
     * @example
     * // Get one TugasMurid
     * const tugasMurid = await prisma.tugasMurid.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TugasMuridFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TugasMuridFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TugasMuridClient<$Result.GetResult<Prisma.$TugasMuridPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TugasMurid that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasMuridFindFirstArgs} args - Arguments to find a TugasMurid
     * @example
     * // Get one TugasMurid
     * const tugasMurid = await prisma.tugasMurid.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TugasMuridFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TugasMuridFindFirstArgs<ExtArgs>>
    ): Prisma__TugasMuridClient<$Result.GetResult<Prisma.$TugasMuridPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TugasMurid that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasMuridFindFirstOrThrowArgs} args - Arguments to find a TugasMurid
     * @example
     * // Get one TugasMurid
     * const tugasMurid = await prisma.tugasMurid.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TugasMuridFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TugasMuridFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TugasMuridClient<$Result.GetResult<Prisma.$TugasMuridPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TugasMurids that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasMuridFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TugasMurids
     * const tugasMurids = await prisma.tugasMurid.findMany()
     * 
     * // Get first 10 TugasMurids
     * const tugasMurids = await prisma.tugasMurid.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tugasMuridWithIdOnly = await prisma.tugasMurid.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TugasMuridFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TugasMuridFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TugasMuridPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TugasMurid.
     * @param {TugasMuridCreateArgs} args - Arguments to create a TugasMurid.
     * @example
     * // Create one TugasMurid
     * const TugasMurid = await prisma.tugasMurid.create({
     *   data: {
     *     // ... data to create a TugasMurid
     *   }
     * })
     * 
    **/
    create<T extends TugasMuridCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TugasMuridCreateArgs<ExtArgs>>
    ): Prisma__TugasMuridClient<$Result.GetResult<Prisma.$TugasMuridPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TugasMurids.
     *     @param {TugasMuridCreateManyArgs} args - Arguments to create many TugasMurids.
     *     @example
     *     // Create many TugasMurids
     *     const tugasMurid = await prisma.tugasMurid.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TugasMuridCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TugasMuridCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TugasMurid.
     * @param {TugasMuridDeleteArgs} args - Arguments to delete one TugasMurid.
     * @example
     * // Delete one TugasMurid
     * const TugasMurid = await prisma.tugasMurid.delete({
     *   where: {
     *     // ... filter to delete one TugasMurid
     *   }
     * })
     * 
    **/
    delete<T extends TugasMuridDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TugasMuridDeleteArgs<ExtArgs>>
    ): Prisma__TugasMuridClient<$Result.GetResult<Prisma.$TugasMuridPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TugasMurid.
     * @param {TugasMuridUpdateArgs} args - Arguments to update one TugasMurid.
     * @example
     * // Update one TugasMurid
     * const tugasMurid = await prisma.tugasMurid.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TugasMuridUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TugasMuridUpdateArgs<ExtArgs>>
    ): Prisma__TugasMuridClient<$Result.GetResult<Prisma.$TugasMuridPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TugasMurids.
     * @param {TugasMuridDeleteManyArgs} args - Arguments to filter TugasMurids to delete.
     * @example
     * // Delete a few TugasMurids
     * const { count } = await prisma.tugasMurid.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TugasMuridDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TugasMuridDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TugasMurids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasMuridUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TugasMurids
     * const tugasMurid = await prisma.tugasMurid.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TugasMuridUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TugasMuridUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TugasMurid.
     * @param {TugasMuridUpsertArgs} args - Arguments to update or create a TugasMurid.
     * @example
     * // Update or create a TugasMurid
     * const tugasMurid = await prisma.tugasMurid.upsert({
     *   create: {
     *     // ... data to create a TugasMurid
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TugasMurid we want to update
     *   }
     * })
    **/
    upsert<T extends TugasMuridUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TugasMuridUpsertArgs<ExtArgs>>
    ): Prisma__TugasMuridClient<$Result.GetResult<Prisma.$TugasMuridPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of TugasMurids.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasMuridCountArgs} args - Arguments to filter TugasMurids to count.
     * @example
     * // Count the number of TugasMurids
     * const count = await prisma.tugasMurid.count({
     *   where: {
     *     // ... the filter for the TugasMurids we want to count
     *   }
     * })
    **/
    count<T extends TugasMuridCountArgs>(
      args?: Subset<T, TugasMuridCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TugasMuridCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TugasMurid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasMuridAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TugasMuridAggregateArgs>(args: Subset<T, TugasMuridAggregateArgs>): Prisma.PrismaPromise<GetTugasMuridAggregateType<T>>

    /**
     * Group by TugasMurid.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TugasMuridGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TugasMuridGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TugasMuridGroupByArgs['orderBy'] }
        : { orderBy?: TugasMuridGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TugasMuridGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTugasMuridGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TugasMurid model
   */
  readonly fields: TugasMuridFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TugasMurid.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TugasMuridClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    tugas<T extends TugasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TugasDefaultArgs<ExtArgs>>): Prisma__TugasClient<$Result.GetResult<Prisma.$TugasPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TugasMurid model
   */ 
  interface TugasMuridFieldRefs {
    readonly id: FieldRef<"TugasMurid", 'String'>
    readonly mataPelajaran: FieldRef<"TugasMurid", 'String'>
    readonly materi: FieldRef<"TugasMurid", 'String'>
    readonly judul: FieldRef<"TugasMurid", 'String'>
    readonly isi: FieldRef<"TugasMurid", 'String'>
    readonly filePath: FieldRef<"TugasMurid", 'String'>
    readonly namaUser: FieldRef<"TugasMurid", 'String'>
    readonly nilai: FieldRef<"TugasMurid", 'Int'>
    readonly idTugas: FieldRef<"TugasMurid", 'String'>
    readonly komentar: FieldRef<"TugasMurid", 'String'>
  }
    

  // Custom InputTypes

  /**
   * TugasMurid findUnique
   */
  export type TugasMuridFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TugasMurid
     */
    select?: TugasMuridSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TugasMuridInclude<ExtArgs> | null
    /**
     * Filter, which TugasMurid to fetch.
     */
    where: TugasMuridWhereUniqueInput
  }


  /**
   * TugasMurid findUniqueOrThrow
   */
  export type TugasMuridFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TugasMurid
     */
    select?: TugasMuridSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TugasMuridInclude<ExtArgs> | null
    /**
     * Filter, which TugasMurid to fetch.
     */
    where: TugasMuridWhereUniqueInput
  }


  /**
   * TugasMurid findFirst
   */
  export type TugasMuridFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TugasMurid
     */
    select?: TugasMuridSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TugasMuridInclude<ExtArgs> | null
    /**
     * Filter, which TugasMurid to fetch.
     */
    where?: TugasMuridWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TugasMurids to fetch.
     */
    orderBy?: TugasMuridOrderByWithRelationInput | TugasMuridOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TugasMurids.
     */
    cursor?: TugasMuridWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TugasMurids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TugasMurids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TugasMurids.
     */
    distinct?: TugasMuridScalarFieldEnum | TugasMuridScalarFieldEnum[]
  }


  /**
   * TugasMurid findFirstOrThrow
   */
  export type TugasMuridFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TugasMurid
     */
    select?: TugasMuridSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TugasMuridInclude<ExtArgs> | null
    /**
     * Filter, which TugasMurid to fetch.
     */
    where?: TugasMuridWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TugasMurids to fetch.
     */
    orderBy?: TugasMuridOrderByWithRelationInput | TugasMuridOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TugasMurids.
     */
    cursor?: TugasMuridWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TugasMurids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TugasMurids.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TugasMurids.
     */
    distinct?: TugasMuridScalarFieldEnum | TugasMuridScalarFieldEnum[]
  }


  /**
   * TugasMurid findMany
   */
  export type TugasMuridFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TugasMurid
     */
    select?: TugasMuridSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TugasMuridInclude<ExtArgs> | null
    /**
     * Filter, which TugasMurids to fetch.
     */
    where?: TugasMuridWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TugasMurids to fetch.
     */
    orderBy?: TugasMuridOrderByWithRelationInput | TugasMuridOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TugasMurids.
     */
    cursor?: TugasMuridWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TugasMurids from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TugasMurids.
     */
    skip?: number
    distinct?: TugasMuridScalarFieldEnum | TugasMuridScalarFieldEnum[]
  }


  /**
   * TugasMurid create
   */
  export type TugasMuridCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TugasMurid
     */
    select?: TugasMuridSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TugasMuridInclude<ExtArgs> | null
    /**
     * The data needed to create a TugasMurid.
     */
    data: XOR<TugasMuridCreateInput, TugasMuridUncheckedCreateInput>
  }


  /**
   * TugasMurid createMany
   */
  export type TugasMuridCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TugasMurids.
     */
    data: TugasMuridCreateManyInput | TugasMuridCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * TugasMurid update
   */
  export type TugasMuridUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TugasMurid
     */
    select?: TugasMuridSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TugasMuridInclude<ExtArgs> | null
    /**
     * The data needed to update a TugasMurid.
     */
    data: XOR<TugasMuridUpdateInput, TugasMuridUncheckedUpdateInput>
    /**
     * Choose, which TugasMurid to update.
     */
    where: TugasMuridWhereUniqueInput
  }


  /**
   * TugasMurid updateMany
   */
  export type TugasMuridUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TugasMurids.
     */
    data: XOR<TugasMuridUpdateManyMutationInput, TugasMuridUncheckedUpdateManyInput>
    /**
     * Filter which TugasMurids to update
     */
    where?: TugasMuridWhereInput
  }


  /**
   * TugasMurid upsert
   */
  export type TugasMuridUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TugasMurid
     */
    select?: TugasMuridSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TugasMuridInclude<ExtArgs> | null
    /**
     * The filter to search for the TugasMurid to update in case it exists.
     */
    where: TugasMuridWhereUniqueInput
    /**
     * In case the TugasMurid found by the `where` argument doesn't exist, create a new TugasMurid with this data.
     */
    create: XOR<TugasMuridCreateInput, TugasMuridUncheckedCreateInput>
    /**
     * In case the TugasMurid was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TugasMuridUpdateInput, TugasMuridUncheckedUpdateInput>
  }


  /**
   * TugasMurid delete
   */
  export type TugasMuridDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TugasMurid
     */
    select?: TugasMuridSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TugasMuridInclude<ExtArgs> | null
    /**
     * Filter which TugasMurid to delete.
     */
    where: TugasMuridWhereUniqueInput
  }


  /**
   * TugasMurid deleteMany
   */
  export type TugasMuridDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TugasMurids to delete
     */
    where?: TugasMuridWhereInput
  }


  /**
   * TugasMurid without action
   */
  export type TugasMuridDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TugasMurid
     */
    select?: TugasMuridSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TugasMuridInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const MateriScalarFieldEnum: {
    id: 'id',
    mataPelajaran: 'mataPelajaran',
    materi: 'materi',
    judul: 'judul',
    isi: 'isi',
    filePath: 'filePath',
    namaUser: 'namaUser'
  };

  export type MateriScalarFieldEnum = (typeof MateriScalarFieldEnum)[keyof typeof MateriScalarFieldEnum]


  export const TugasScalarFieldEnum: {
    id: 'id',
    mataPelajaran: 'mataPelajaran',
    materi: 'materi',
    judul: 'judul',
    isi: 'isi',
    tanggalPengumpulan: 'tanggalPengumpulan',
    namaUser: 'namaUser'
  };

  export type TugasScalarFieldEnum = (typeof TugasScalarFieldEnum)[keyof typeof TugasScalarFieldEnum]


  export const TugasMuridScalarFieldEnum: {
    id: 'id',
    mataPelajaran: 'mataPelajaran',
    materi: 'materi',
    judul: 'judul',
    isi: 'isi',
    filePath: 'filePath',
    namaUser: 'namaUser',
    nilai: 'nilai',
    idTugas: 'idTugas',
    komentar: 'komentar'
  };

  export type TugasMuridScalarFieldEnum = (typeof TugasMuridScalarFieldEnum)[keyof typeof TugasMuridScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type MateriWhereInput = {
    AND?: MateriWhereInput | MateriWhereInput[]
    OR?: MateriWhereInput[]
    NOT?: MateriWhereInput | MateriWhereInput[]
    id?: StringFilter<"Materi"> | string
    mataPelajaran?: StringFilter<"Materi"> | string
    materi?: StringFilter<"Materi"> | string
    judul?: StringFilter<"Materi"> | string
    isi?: StringFilter<"Materi"> | string
    filePath?: StringFilter<"Materi"> | string
    namaUser?: StringFilter<"Materi"> | string
  }

  export type MateriOrderByWithRelationInput = {
    id?: SortOrder
    mataPelajaran?: SortOrder
    materi?: SortOrder
    judul?: SortOrder
    isi?: SortOrder
    filePath?: SortOrder
    namaUser?: SortOrder
  }

  export type MateriWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MateriWhereInput | MateriWhereInput[]
    OR?: MateriWhereInput[]
    NOT?: MateriWhereInput | MateriWhereInput[]
    mataPelajaran?: StringFilter<"Materi"> | string
    materi?: StringFilter<"Materi"> | string
    judul?: StringFilter<"Materi"> | string
    isi?: StringFilter<"Materi"> | string
    filePath?: StringFilter<"Materi"> | string
    namaUser?: StringFilter<"Materi"> | string
  }, "id">

  export type MateriOrderByWithAggregationInput = {
    id?: SortOrder
    mataPelajaran?: SortOrder
    materi?: SortOrder
    judul?: SortOrder
    isi?: SortOrder
    filePath?: SortOrder
    namaUser?: SortOrder
    _count?: MateriCountOrderByAggregateInput
    _max?: MateriMaxOrderByAggregateInput
    _min?: MateriMinOrderByAggregateInput
  }

  export type MateriScalarWhereWithAggregatesInput = {
    AND?: MateriScalarWhereWithAggregatesInput | MateriScalarWhereWithAggregatesInput[]
    OR?: MateriScalarWhereWithAggregatesInput[]
    NOT?: MateriScalarWhereWithAggregatesInput | MateriScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Materi"> | string
    mataPelajaran?: StringWithAggregatesFilter<"Materi"> | string
    materi?: StringWithAggregatesFilter<"Materi"> | string
    judul?: StringWithAggregatesFilter<"Materi"> | string
    isi?: StringWithAggregatesFilter<"Materi"> | string
    filePath?: StringWithAggregatesFilter<"Materi"> | string
    namaUser?: StringWithAggregatesFilter<"Materi"> | string
  }

  export type TugasWhereInput = {
    AND?: TugasWhereInput | TugasWhereInput[]
    OR?: TugasWhereInput[]
    NOT?: TugasWhereInput | TugasWhereInput[]
    id?: StringFilter<"Tugas"> | string
    mataPelajaran?: StringFilter<"Tugas"> | string
    materi?: StringFilter<"Tugas"> | string
    judul?: StringFilter<"Tugas"> | string
    isi?: StringFilter<"Tugas"> | string
    tanggalPengumpulan?: DateTimeFilter<"Tugas"> | Date | string
    namaUser?: StringFilter<"Tugas"> | string
    tugasMurid?: TugasMuridListRelationFilter
  }

  export type TugasOrderByWithRelationInput = {
    id?: SortOrder
    mataPelajaran?: SortOrder
    materi?: SortOrder
    judul?: SortOrder
    isi?: SortOrder
    tanggalPengumpulan?: SortOrder
    namaUser?: SortOrder
    tugasMurid?: TugasMuridOrderByRelationAggregateInput
  }

  export type TugasWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TugasWhereInput | TugasWhereInput[]
    OR?: TugasWhereInput[]
    NOT?: TugasWhereInput | TugasWhereInput[]
    mataPelajaran?: StringFilter<"Tugas"> | string
    materi?: StringFilter<"Tugas"> | string
    judul?: StringFilter<"Tugas"> | string
    isi?: StringFilter<"Tugas"> | string
    tanggalPengumpulan?: DateTimeFilter<"Tugas"> | Date | string
    namaUser?: StringFilter<"Tugas"> | string
    tugasMurid?: TugasMuridListRelationFilter
  }, "id">

  export type TugasOrderByWithAggregationInput = {
    id?: SortOrder
    mataPelajaran?: SortOrder
    materi?: SortOrder
    judul?: SortOrder
    isi?: SortOrder
    tanggalPengumpulan?: SortOrder
    namaUser?: SortOrder
    _count?: TugasCountOrderByAggregateInput
    _max?: TugasMaxOrderByAggregateInput
    _min?: TugasMinOrderByAggregateInput
  }

  export type TugasScalarWhereWithAggregatesInput = {
    AND?: TugasScalarWhereWithAggregatesInput | TugasScalarWhereWithAggregatesInput[]
    OR?: TugasScalarWhereWithAggregatesInput[]
    NOT?: TugasScalarWhereWithAggregatesInput | TugasScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tugas"> | string
    mataPelajaran?: StringWithAggregatesFilter<"Tugas"> | string
    materi?: StringWithAggregatesFilter<"Tugas"> | string
    judul?: StringWithAggregatesFilter<"Tugas"> | string
    isi?: StringWithAggregatesFilter<"Tugas"> | string
    tanggalPengumpulan?: DateTimeWithAggregatesFilter<"Tugas"> | Date | string
    namaUser?: StringWithAggregatesFilter<"Tugas"> | string
  }

  export type TugasMuridWhereInput = {
    AND?: TugasMuridWhereInput | TugasMuridWhereInput[]
    OR?: TugasMuridWhereInput[]
    NOT?: TugasMuridWhereInput | TugasMuridWhereInput[]
    id?: StringFilter<"TugasMurid"> | string
    mataPelajaran?: StringNullableFilter<"TugasMurid"> | string | null
    materi?: StringNullableFilter<"TugasMurid"> | string | null
    judul?: StringNullableFilter<"TugasMurid"> | string | null
    isi?: StringFilter<"TugasMurid"> | string
    filePath?: StringFilter<"TugasMurid"> | string
    namaUser?: StringFilter<"TugasMurid"> | string
    nilai?: IntNullableFilter<"TugasMurid"> | number | null
    idTugas?: StringFilter<"TugasMurid"> | string
    komentar?: StringNullableFilter<"TugasMurid"> | string | null
    tugas?: XOR<TugasRelationFilter, TugasWhereInput>
  }

  export type TugasMuridOrderByWithRelationInput = {
    id?: SortOrder
    mataPelajaran?: SortOrderInput | SortOrder
    materi?: SortOrderInput | SortOrder
    judul?: SortOrderInput | SortOrder
    isi?: SortOrder
    filePath?: SortOrder
    namaUser?: SortOrder
    nilai?: SortOrderInput | SortOrder
    idTugas?: SortOrder
    komentar?: SortOrderInput | SortOrder
    tugas?: TugasOrderByWithRelationInput
  }

  export type TugasMuridWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TugasMuridWhereInput | TugasMuridWhereInput[]
    OR?: TugasMuridWhereInput[]
    NOT?: TugasMuridWhereInput | TugasMuridWhereInput[]
    mataPelajaran?: StringNullableFilter<"TugasMurid"> | string | null
    materi?: StringNullableFilter<"TugasMurid"> | string | null
    judul?: StringNullableFilter<"TugasMurid"> | string | null
    isi?: StringFilter<"TugasMurid"> | string
    filePath?: StringFilter<"TugasMurid"> | string
    namaUser?: StringFilter<"TugasMurid"> | string
    nilai?: IntNullableFilter<"TugasMurid"> | number | null
    idTugas?: StringFilter<"TugasMurid"> | string
    komentar?: StringNullableFilter<"TugasMurid"> | string | null
    tugas?: XOR<TugasRelationFilter, TugasWhereInput>
  }, "id">

  export type TugasMuridOrderByWithAggregationInput = {
    id?: SortOrder
    mataPelajaran?: SortOrderInput | SortOrder
    materi?: SortOrderInput | SortOrder
    judul?: SortOrderInput | SortOrder
    isi?: SortOrder
    filePath?: SortOrder
    namaUser?: SortOrder
    nilai?: SortOrderInput | SortOrder
    idTugas?: SortOrder
    komentar?: SortOrderInput | SortOrder
    _count?: TugasMuridCountOrderByAggregateInput
    _avg?: TugasMuridAvgOrderByAggregateInput
    _max?: TugasMuridMaxOrderByAggregateInput
    _min?: TugasMuridMinOrderByAggregateInput
    _sum?: TugasMuridSumOrderByAggregateInput
  }

  export type TugasMuridScalarWhereWithAggregatesInput = {
    AND?: TugasMuridScalarWhereWithAggregatesInput | TugasMuridScalarWhereWithAggregatesInput[]
    OR?: TugasMuridScalarWhereWithAggregatesInput[]
    NOT?: TugasMuridScalarWhereWithAggregatesInput | TugasMuridScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TugasMurid"> | string
    mataPelajaran?: StringNullableWithAggregatesFilter<"TugasMurid"> | string | null
    materi?: StringNullableWithAggregatesFilter<"TugasMurid"> | string | null
    judul?: StringNullableWithAggregatesFilter<"TugasMurid"> | string | null
    isi?: StringWithAggregatesFilter<"TugasMurid"> | string
    filePath?: StringWithAggregatesFilter<"TugasMurid"> | string
    namaUser?: StringWithAggregatesFilter<"TugasMurid"> | string
    nilai?: IntNullableWithAggregatesFilter<"TugasMurid"> | number | null
    idTugas?: StringWithAggregatesFilter<"TugasMurid"> | string
    komentar?: StringNullableWithAggregatesFilter<"TugasMurid"> | string | null
  }

  export type MateriCreateInput = {
    id?: string
    mataPelajaran: string
    materi: string
    judul: string
    isi: string
    filePath: string
    namaUser: string
  }

  export type MateriUncheckedCreateInput = {
    id?: string
    mataPelajaran: string
    materi: string
    judul: string
    isi: string
    filePath: string
    namaUser: string
  }

  export type MateriUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mataPelajaran?: StringFieldUpdateOperationsInput | string
    materi?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    isi?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    namaUser?: StringFieldUpdateOperationsInput | string
  }

  export type MateriUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mataPelajaran?: StringFieldUpdateOperationsInput | string
    materi?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    isi?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    namaUser?: StringFieldUpdateOperationsInput | string
  }

  export type MateriCreateManyInput = {
    id?: string
    mataPelajaran: string
    materi: string
    judul: string
    isi: string
    filePath: string
    namaUser: string
  }

  export type MateriUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mataPelajaran?: StringFieldUpdateOperationsInput | string
    materi?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    isi?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    namaUser?: StringFieldUpdateOperationsInput | string
  }

  export type MateriUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mataPelajaran?: StringFieldUpdateOperationsInput | string
    materi?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    isi?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    namaUser?: StringFieldUpdateOperationsInput | string
  }

  export type TugasCreateInput = {
    id?: string
    mataPelajaran: string
    materi: string
    judul: string
    isi: string
    tanggalPengumpulan: Date | string
    namaUser: string
    tugasMurid?: TugasMuridCreateNestedManyWithoutTugasInput
  }

  export type TugasUncheckedCreateInput = {
    id?: string
    mataPelajaran: string
    materi: string
    judul: string
    isi: string
    tanggalPengumpulan: Date | string
    namaUser: string
    tugasMurid?: TugasMuridUncheckedCreateNestedManyWithoutTugasInput
  }

  export type TugasUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mataPelajaran?: StringFieldUpdateOperationsInput | string
    materi?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    isi?: StringFieldUpdateOperationsInput | string
    tanggalPengumpulan?: DateTimeFieldUpdateOperationsInput | Date | string
    namaUser?: StringFieldUpdateOperationsInput | string
    tugasMurid?: TugasMuridUpdateManyWithoutTugasNestedInput
  }

  export type TugasUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mataPelajaran?: StringFieldUpdateOperationsInput | string
    materi?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    isi?: StringFieldUpdateOperationsInput | string
    tanggalPengumpulan?: DateTimeFieldUpdateOperationsInput | Date | string
    namaUser?: StringFieldUpdateOperationsInput | string
    tugasMurid?: TugasMuridUncheckedUpdateManyWithoutTugasNestedInput
  }

  export type TugasCreateManyInput = {
    id?: string
    mataPelajaran: string
    materi: string
    judul: string
    isi: string
    tanggalPengumpulan: Date | string
    namaUser: string
  }

  export type TugasUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mataPelajaran?: StringFieldUpdateOperationsInput | string
    materi?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    isi?: StringFieldUpdateOperationsInput | string
    tanggalPengumpulan?: DateTimeFieldUpdateOperationsInput | Date | string
    namaUser?: StringFieldUpdateOperationsInput | string
  }

  export type TugasUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mataPelajaran?: StringFieldUpdateOperationsInput | string
    materi?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    isi?: StringFieldUpdateOperationsInput | string
    tanggalPengumpulan?: DateTimeFieldUpdateOperationsInput | Date | string
    namaUser?: StringFieldUpdateOperationsInput | string
  }

  export type TugasMuridCreateInput = {
    id?: string
    mataPelajaran?: string | null
    materi?: string | null
    judul?: string | null
    isi: string
    filePath: string
    namaUser: string
    nilai?: number | null
    komentar?: string | null
    tugas: TugasCreateNestedOneWithoutTugasMuridInput
  }

  export type TugasMuridUncheckedCreateInput = {
    id?: string
    mataPelajaran?: string | null
    materi?: string | null
    judul?: string | null
    isi: string
    filePath: string
    namaUser: string
    nilai?: number | null
    idTugas: string
    komentar?: string | null
  }

  export type TugasMuridUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mataPelajaran?: NullableStringFieldUpdateOperationsInput | string | null
    materi?: NullableStringFieldUpdateOperationsInput | string | null
    judul?: NullableStringFieldUpdateOperationsInput | string | null
    isi?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    namaUser?: StringFieldUpdateOperationsInput | string
    nilai?: NullableIntFieldUpdateOperationsInput | number | null
    komentar?: NullableStringFieldUpdateOperationsInput | string | null
    tugas?: TugasUpdateOneRequiredWithoutTugasMuridNestedInput
  }

  export type TugasMuridUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    mataPelajaran?: NullableStringFieldUpdateOperationsInput | string | null
    materi?: NullableStringFieldUpdateOperationsInput | string | null
    judul?: NullableStringFieldUpdateOperationsInput | string | null
    isi?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    namaUser?: StringFieldUpdateOperationsInput | string
    nilai?: NullableIntFieldUpdateOperationsInput | number | null
    idTugas?: StringFieldUpdateOperationsInput | string
    komentar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TugasMuridCreateManyInput = {
    id?: string
    mataPelajaran?: string | null
    materi?: string | null
    judul?: string | null
    isi: string
    filePath: string
    namaUser: string
    nilai?: number | null
    idTugas: string
    komentar?: string | null
  }

  export type TugasMuridUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    mataPelajaran?: NullableStringFieldUpdateOperationsInput | string | null
    materi?: NullableStringFieldUpdateOperationsInput | string | null
    judul?: NullableStringFieldUpdateOperationsInput | string | null
    isi?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    namaUser?: StringFieldUpdateOperationsInput | string
    nilai?: NullableIntFieldUpdateOperationsInput | number | null
    komentar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TugasMuridUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    mataPelajaran?: NullableStringFieldUpdateOperationsInput | string | null
    materi?: NullableStringFieldUpdateOperationsInput | string | null
    judul?: NullableStringFieldUpdateOperationsInput | string | null
    isi?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    namaUser?: StringFieldUpdateOperationsInput | string
    nilai?: NullableIntFieldUpdateOperationsInput | number | null
    idTugas?: StringFieldUpdateOperationsInput | string
    komentar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type MateriCountOrderByAggregateInput = {
    id?: SortOrder
    mataPelajaran?: SortOrder
    materi?: SortOrder
    judul?: SortOrder
    isi?: SortOrder
    filePath?: SortOrder
    namaUser?: SortOrder
  }

  export type MateriMaxOrderByAggregateInput = {
    id?: SortOrder
    mataPelajaran?: SortOrder
    materi?: SortOrder
    judul?: SortOrder
    isi?: SortOrder
    filePath?: SortOrder
    namaUser?: SortOrder
  }

  export type MateriMinOrderByAggregateInput = {
    id?: SortOrder
    mataPelajaran?: SortOrder
    materi?: SortOrder
    judul?: SortOrder
    isi?: SortOrder
    filePath?: SortOrder
    namaUser?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type TugasMuridListRelationFilter = {
    every?: TugasMuridWhereInput
    some?: TugasMuridWhereInput
    none?: TugasMuridWhereInput
  }

  export type TugasMuridOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TugasCountOrderByAggregateInput = {
    id?: SortOrder
    mataPelajaran?: SortOrder
    materi?: SortOrder
    judul?: SortOrder
    isi?: SortOrder
    tanggalPengumpulan?: SortOrder
    namaUser?: SortOrder
  }

  export type TugasMaxOrderByAggregateInput = {
    id?: SortOrder
    mataPelajaran?: SortOrder
    materi?: SortOrder
    judul?: SortOrder
    isi?: SortOrder
    tanggalPengumpulan?: SortOrder
    namaUser?: SortOrder
  }

  export type TugasMinOrderByAggregateInput = {
    id?: SortOrder
    mataPelajaran?: SortOrder
    materi?: SortOrder
    judul?: SortOrder
    isi?: SortOrder
    tanggalPengumpulan?: SortOrder
    namaUser?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type TugasRelationFilter = {
    is?: TugasWhereInput
    isNot?: TugasWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type TugasMuridCountOrderByAggregateInput = {
    id?: SortOrder
    mataPelajaran?: SortOrder
    materi?: SortOrder
    judul?: SortOrder
    isi?: SortOrder
    filePath?: SortOrder
    namaUser?: SortOrder
    nilai?: SortOrder
    idTugas?: SortOrder
    komentar?: SortOrder
  }

  export type TugasMuridAvgOrderByAggregateInput = {
    nilai?: SortOrder
  }

  export type TugasMuridMaxOrderByAggregateInput = {
    id?: SortOrder
    mataPelajaran?: SortOrder
    materi?: SortOrder
    judul?: SortOrder
    isi?: SortOrder
    filePath?: SortOrder
    namaUser?: SortOrder
    nilai?: SortOrder
    idTugas?: SortOrder
    komentar?: SortOrder
  }

  export type TugasMuridMinOrderByAggregateInput = {
    id?: SortOrder
    mataPelajaran?: SortOrder
    materi?: SortOrder
    judul?: SortOrder
    isi?: SortOrder
    filePath?: SortOrder
    namaUser?: SortOrder
    nilai?: SortOrder
    idTugas?: SortOrder
    komentar?: SortOrder
  }

  export type TugasMuridSumOrderByAggregateInput = {
    nilai?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type TugasMuridCreateNestedManyWithoutTugasInput = {
    create?: XOR<TugasMuridCreateWithoutTugasInput, TugasMuridUncheckedCreateWithoutTugasInput> | TugasMuridCreateWithoutTugasInput[] | TugasMuridUncheckedCreateWithoutTugasInput[]
    connectOrCreate?: TugasMuridCreateOrConnectWithoutTugasInput | TugasMuridCreateOrConnectWithoutTugasInput[]
    createMany?: TugasMuridCreateManyTugasInputEnvelope
    connect?: TugasMuridWhereUniqueInput | TugasMuridWhereUniqueInput[]
  }

  export type TugasMuridUncheckedCreateNestedManyWithoutTugasInput = {
    create?: XOR<TugasMuridCreateWithoutTugasInput, TugasMuridUncheckedCreateWithoutTugasInput> | TugasMuridCreateWithoutTugasInput[] | TugasMuridUncheckedCreateWithoutTugasInput[]
    connectOrCreate?: TugasMuridCreateOrConnectWithoutTugasInput | TugasMuridCreateOrConnectWithoutTugasInput[]
    createMany?: TugasMuridCreateManyTugasInputEnvelope
    connect?: TugasMuridWhereUniqueInput | TugasMuridWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TugasMuridUpdateManyWithoutTugasNestedInput = {
    create?: XOR<TugasMuridCreateWithoutTugasInput, TugasMuridUncheckedCreateWithoutTugasInput> | TugasMuridCreateWithoutTugasInput[] | TugasMuridUncheckedCreateWithoutTugasInput[]
    connectOrCreate?: TugasMuridCreateOrConnectWithoutTugasInput | TugasMuridCreateOrConnectWithoutTugasInput[]
    upsert?: TugasMuridUpsertWithWhereUniqueWithoutTugasInput | TugasMuridUpsertWithWhereUniqueWithoutTugasInput[]
    createMany?: TugasMuridCreateManyTugasInputEnvelope
    set?: TugasMuridWhereUniqueInput | TugasMuridWhereUniqueInput[]
    disconnect?: TugasMuridWhereUniqueInput | TugasMuridWhereUniqueInput[]
    delete?: TugasMuridWhereUniqueInput | TugasMuridWhereUniqueInput[]
    connect?: TugasMuridWhereUniqueInput | TugasMuridWhereUniqueInput[]
    update?: TugasMuridUpdateWithWhereUniqueWithoutTugasInput | TugasMuridUpdateWithWhereUniqueWithoutTugasInput[]
    updateMany?: TugasMuridUpdateManyWithWhereWithoutTugasInput | TugasMuridUpdateManyWithWhereWithoutTugasInput[]
    deleteMany?: TugasMuridScalarWhereInput | TugasMuridScalarWhereInput[]
  }

  export type TugasMuridUncheckedUpdateManyWithoutTugasNestedInput = {
    create?: XOR<TugasMuridCreateWithoutTugasInput, TugasMuridUncheckedCreateWithoutTugasInput> | TugasMuridCreateWithoutTugasInput[] | TugasMuridUncheckedCreateWithoutTugasInput[]
    connectOrCreate?: TugasMuridCreateOrConnectWithoutTugasInput | TugasMuridCreateOrConnectWithoutTugasInput[]
    upsert?: TugasMuridUpsertWithWhereUniqueWithoutTugasInput | TugasMuridUpsertWithWhereUniqueWithoutTugasInput[]
    createMany?: TugasMuridCreateManyTugasInputEnvelope
    set?: TugasMuridWhereUniqueInput | TugasMuridWhereUniqueInput[]
    disconnect?: TugasMuridWhereUniqueInput | TugasMuridWhereUniqueInput[]
    delete?: TugasMuridWhereUniqueInput | TugasMuridWhereUniqueInput[]
    connect?: TugasMuridWhereUniqueInput | TugasMuridWhereUniqueInput[]
    update?: TugasMuridUpdateWithWhereUniqueWithoutTugasInput | TugasMuridUpdateWithWhereUniqueWithoutTugasInput[]
    updateMany?: TugasMuridUpdateManyWithWhereWithoutTugasInput | TugasMuridUpdateManyWithWhereWithoutTugasInput[]
    deleteMany?: TugasMuridScalarWhereInput | TugasMuridScalarWhereInput[]
  }

  export type TugasCreateNestedOneWithoutTugasMuridInput = {
    create?: XOR<TugasCreateWithoutTugasMuridInput, TugasUncheckedCreateWithoutTugasMuridInput>
    connectOrCreate?: TugasCreateOrConnectWithoutTugasMuridInput
    connect?: TugasWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TugasUpdateOneRequiredWithoutTugasMuridNestedInput = {
    create?: XOR<TugasCreateWithoutTugasMuridInput, TugasUncheckedCreateWithoutTugasMuridInput>
    connectOrCreate?: TugasCreateOrConnectWithoutTugasMuridInput
    upsert?: TugasUpsertWithoutTugasMuridInput
    connect?: TugasWhereUniqueInput
    update?: XOR<XOR<TugasUpdateToOneWithWhereWithoutTugasMuridInput, TugasUpdateWithoutTugasMuridInput>, TugasUncheckedUpdateWithoutTugasMuridInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type TugasMuridCreateWithoutTugasInput = {
    id?: string
    mataPelajaran?: string | null
    materi?: string | null
    judul?: string | null
    isi: string
    filePath: string
    namaUser: string
    nilai?: number | null
    komentar?: string | null
  }

  export type TugasMuridUncheckedCreateWithoutTugasInput = {
    id?: string
    mataPelajaran?: string | null
    materi?: string | null
    judul?: string | null
    isi: string
    filePath: string
    namaUser: string
    nilai?: number | null
    komentar?: string | null
  }

  export type TugasMuridCreateOrConnectWithoutTugasInput = {
    where: TugasMuridWhereUniqueInput
    create: XOR<TugasMuridCreateWithoutTugasInput, TugasMuridUncheckedCreateWithoutTugasInput>
  }

  export type TugasMuridCreateManyTugasInputEnvelope = {
    data: TugasMuridCreateManyTugasInput | TugasMuridCreateManyTugasInput[]
    skipDuplicates?: boolean
  }

  export type TugasMuridUpsertWithWhereUniqueWithoutTugasInput = {
    where: TugasMuridWhereUniqueInput
    update: XOR<TugasMuridUpdateWithoutTugasInput, TugasMuridUncheckedUpdateWithoutTugasInput>
    create: XOR<TugasMuridCreateWithoutTugasInput, TugasMuridUncheckedCreateWithoutTugasInput>
  }

  export type TugasMuridUpdateWithWhereUniqueWithoutTugasInput = {
    where: TugasMuridWhereUniqueInput
    data: XOR<TugasMuridUpdateWithoutTugasInput, TugasMuridUncheckedUpdateWithoutTugasInput>
  }

  export type TugasMuridUpdateManyWithWhereWithoutTugasInput = {
    where: TugasMuridScalarWhereInput
    data: XOR<TugasMuridUpdateManyMutationInput, TugasMuridUncheckedUpdateManyWithoutTugasInput>
  }

  export type TugasMuridScalarWhereInput = {
    AND?: TugasMuridScalarWhereInput | TugasMuridScalarWhereInput[]
    OR?: TugasMuridScalarWhereInput[]
    NOT?: TugasMuridScalarWhereInput | TugasMuridScalarWhereInput[]
    id?: StringFilter<"TugasMurid"> | string
    mataPelajaran?: StringNullableFilter<"TugasMurid"> | string | null
    materi?: StringNullableFilter<"TugasMurid"> | string | null
    judul?: StringNullableFilter<"TugasMurid"> | string | null
    isi?: StringFilter<"TugasMurid"> | string
    filePath?: StringFilter<"TugasMurid"> | string
    namaUser?: StringFilter<"TugasMurid"> | string
    nilai?: IntNullableFilter<"TugasMurid"> | number | null
    idTugas?: StringFilter<"TugasMurid"> | string
    komentar?: StringNullableFilter<"TugasMurid"> | string | null
  }

  export type TugasCreateWithoutTugasMuridInput = {
    id?: string
    mataPelajaran: string
    materi: string
    judul: string
    isi: string
    tanggalPengumpulan: Date | string
    namaUser: string
  }

  export type TugasUncheckedCreateWithoutTugasMuridInput = {
    id?: string
    mataPelajaran: string
    materi: string
    judul: string
    isi: string
    tanggalPengumpulan: Date | string
    namaUser: string
  }

  export type TugasCreateOrConnectWithoutTugasMuridInput = {
    where: TugasWhereUniqueInput
    create: XOR<TugasCreateWithoutTugasMuridInput, TugasUncheckedCreateWithoutTugasMuridInput>
  }

  export type TugasUpsertWithoutTugasMuridInput = {
    update: XOR<TugasUpdateWithoutTugasMuridInput, TugasUncheckedUpdateWithoutTugasMuridInput>
    create: XOR<TugasCreateWithoutTugasMuridInput, TugasUncheckedCreateWithoutTugasMuridInput>
    where?: TugasWhereInput
  }

  export type TugasUpdateToOneWithWhereWithoutTugasMuridInput = {
    where?: TugasWhereInput
    data: XOR<TugasUpdateWithoutTugasMuridInput, TugasUncheckedUpdateWithoutTugasMuridInput>
  }

  export type TugasUpdateWithoutTugasMuridInput = {
    id?: StringFieldUpdateOperationsInput | string
    mataPelajaran?: StringFieldUpdateOperationsInput | string
    materi?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    isi?: StringFieldUpdateOperationsInput | string
    tanggalPengumpulan?: DateTimeFieldUpdateOperationsInput | Date | string
    namaUser?: StringFieldUpdateOperationsInput | string
  }

  export type TugasUncheckedUpdateWithoutTugasMuridInput = {
    id?: StringFieldUpdateOperationsInput | string
    mataPelajaran?: StringFieldUpdateOperationsInput | string
    materi?: StringFieldUpdateOperationsInput | string
    judul?: StringFieldUpdateOperationsInput | string
    isi?: StringFieldUpdateOperationsInput | string
    tanggalPengumpulan?: DateTimeFieldUpdateOperationsInput | Date | string
    namaUser?: StringFieldUpdateOperationsInput | string
  }

  export type TugasMuridCreateManyTugasInput = {
    id?: string
    mataPelajaran?: string | null
    materi?: string | null
    judul?: string | null
    isi: string
    filePath: string
    namaUser: string
    nilai?: number | null
    komentar?: string | null
  }

  export type TugasMuridUpdateWithoutTugasInput = {
    id?: StringFieldUpdateOperationsInput | string
    mataPelajaran?: NullableStringFieldUpdateOperationsInput | string | null
    materi?: NullableStringFieldUpdateOperationsInput | string | null
    judul?: NullableStringFieldUpdateOperationsInput | string | null
    isi?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    namaUser?: StringFieldUpdateOperationsInput | string
    nilai?: NullableIntFieldUpdateOperationsInput | number | null
    komentar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TugasMuridUncheckedUpdateWithoutTugasInput = {
    id?: StringFieldUpdateOperationsInput | string
    mataPelajaran?: NullableStringFieldUpdateOperationsInput | string | null
    materi?: NullableStringFieldUpdateOperationsInput | string | null
    judul?: NullableStringFieldUpdateOperationsInput | string | null
    isi?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    namaUser?: StringFieldUpdateOperationsInput | string
    nilai?: NullableIntFieldUpdateOperationsInput | number | null
    komentar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TugasMuridUncheckedUpdateManyWithoutTugasInput = {
    id?: StringFieldUpdateOperationsInput | string
    mataPelajaran?: NullableStringFieldUpdateOperationsInput | string | null
    materi?: NullableStringFieldUpdateOperationsInput | string | null
    judul?: NullableStringFieldUpdateOperationsInput | string | null
    isi?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    namaUser?: StringFieldUpdateOperationsInput | string
    nilai?: NullableIntFieldUpdateOperationsInput | number | null
    komentar?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use TugasCountOutputTypeDefaultArgs instead
     */
    export type TugasCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TugasCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MateriDefaultArgs instead
     */
    export type MateriArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MateriDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TugasDefaultArgs instead
     */
    export type TugasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TugasDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TugasMuridDefaultArgs instead
     */
    export type TugasMuridArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TugasMuridDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}