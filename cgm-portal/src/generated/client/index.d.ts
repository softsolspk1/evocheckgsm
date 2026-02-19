
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model City
 * 
 */
export type City = $Result.DefaultSelection<Prisma.$CityPayload>
/**
 * Model Area
 * 
 */
export type Area = $Result.DefaultSelection<Prisma.$AreaPayload>
/**
 * Model Distributor
 * 
 */
export type Distributor = $Result.DefaultSelection<Prisma.$DistributorPayload>
/**
 * Model Patient
 * 
 */
export type Patient = $Result.DefaultSelection<Prisma.$PatientPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model PostAdministrationForm
 * 
 */
export type PostAdministrationForm = $Result.DefaultSelection<Prisma.$PostAdministrationFormPayload>
/**
 * Model Inventory
 * 
 */
export type Inventory = $Result.DefaultSelection<Prisma.$InventoryPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  SUPER_ADMIN: 'SUPER_ADMIN',
  SUB_ADMIN: 'SUB_ADMIN',
  KAM: 'KAM',
  DISTRIBUTOR: 'DISTRIBUTOR'
};

export type Role = (typeof Role)[keyof typeof Role]


export const OrderStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.city`: Exposes CRUD operations for the **City** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cities
    * const cities = await prisma.city.findMany()
    * ```
    */
  get city(): Prisma.CityDelegate<ExtArgs>;

  /**
   * `prisma.area`: Exposes CRUD operations for the **Area** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Areas
    * const areas = await prisma.area.findMany()
    * ```
    */
  get area(): Prisma.AreaDelegate<ExtArgs>;

  /**
   * `prisma.distributor`: Exposes CRUD operations for the **Distributor** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Distributors
    * const distributors = await prisma.distributor.findMany()
    * ```
    */
  get distributor(): Prisma.DistributorDelegate<ExtArgs>;

  /**
   * `prisma.patient`: Exposes CRUD operations for the **Patient** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Patients
    * const patients = await prisma.patient.findMany()
    * ```
    */
  get patient(): Prisma.PatientDelegate<ExtArgs>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs>;

  /**
   * `prisma.postAdministrationForm`: Exposes CRUD operations for the **PostAdministrationForm** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PostAdministrationForms
    * const postAdministrationForms = await prisma.postAdministrationForm.findMany()
    * ```
    */
  get postAdministrationForm(): Prisma.PostAdministrationFormDelegate<ExtArgs>;

  /**
   * `prisma.inventory`: Exposes CRUD operations for the **Inventory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Inventories
    * const inventories = await prisma.inventory.findMany()
    * ```
    */
  get inventory(): Prisma.InventoryDelegate<ExtArgs>;
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
   * Prisma Client JS version: 6.2.0
   * Query Engine version: 4123509d24aa4dede1e864b46351bf2790323b69
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
    User: 'User',
    City: 'City',
    Area: 'Area',
    Distributor: 'Distributor',
    Patient: 'Patient',
    Order: 'Order',
    PostAdministrationForm: 'PostAdministrationForm',
    Inventory: 'Inventory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "city" | "area" | "distributor" | "patient" | "order" | "postAdministrationForm" | "inventory"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      City: {
        payload: Prisma.$CityPayload<ExtArgs>
        fields: Prisma.CityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findFirst: {
            args: Prisma.CityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          findMany: {
            args: Prisma.CityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          create: {
            args: Prisma.CityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          createMany: {
            args: Prisma.CityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          delete: {
            args: Prisma.CityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          update: {
            args: Prisma.CityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          deleteMany: {
            args: Prisma.CityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>[]
          }
          upsert: {
            args: Prisma.CityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CityPayload>
          }
          aggregate: {
            args: Prisma.CityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCity>
          }
          groupBy: {
            args: Prisma.CityGroupByArgs<ExtArgs>
            result: $Utils.Optional<CityGroupByOutputType>[]
          }
          count: {
            args: Prisma.CityCountArgs<ExtArgs>
            result: $Utils.Optional<CityCountAggregateOutputType> | number
          }
        }
      }
      Area: {
        payload: Prisma.$AreaPayload<ExtArgs>
        fields: Prisma.AreaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AreaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AreaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          findFirst: {
            args: Prisma.AreaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AreaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          findMany: {
            args: Prisma.AreaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>[]
          }
          create: {
            args: Prisma.AreaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          createMany: {
            args: Prisma.AreaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AreaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>[]
          }
          delete: {
            args: Prisma.AreaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          update: {
            args: Prisma.AreaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          deleteMany: {
            args: Prisma.AreaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AreaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AreaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>[]
          }
          upsert: {
            args: Prisma.AreaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AreaPayload>
          }
          aggregate: {
            args: Prisma.AreaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateArea>
          }
          groupBy: {
            args: Prisma.AreaGroupByArgs<ExtArgs>
            result: $Utils.Optional<AreaGroupByOutputType>[]
          }
          count: {
            args: Prisma.AreaCountArgs<ExtArgs>
            result: $Utils.Optional<AreaCountAggregateOutputType> | number
          }
        }
      }
      Distributor: {
        payload: Prisma.$DistributorPayload<ExtArgs>
        fields: Prisma.DistributorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DistributorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DistributorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorPayload>
          }
          findFirst: {
            args: Prisma.DistributorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DistributorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorPayload>
          }
          findMany: {
            args: Prisma.DistributorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorPayload>[]
          }
          create: {
            args: Prisma.DistributorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorPayload>
          }
          createMany: {
            args: Prisma.DistributorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DistributorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorPayload>[]
          }
          delete: {
            args: Prisma.DistributorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorPayload>
          }
          update: {
            args: Prisma.DistributorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorPayload>
          }
          deleteMany: {
            args: Prisma.DistributorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DistributorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DistributorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorPayload>[]
          }
          upsert: {
            args: Prisma.DistributorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DistributorPayload>
          }
          aggregate: {
            args: Prisma.DistributorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDistributor>
          }
          groupBy: {
            args: Prisma.DistributorGroupByArgs<ExtArgs>
            result: $Utils.Optional<DistributorGroupByOutputType>[]
          }
          count: {
            args: Prisma.DistributorCountArgs<ExtArgs>
            result: $Utils.Optional<DistributorCountAggregateOutputType> | number
          }
        }
      }
      Patient: {
        payload: Prisma.$PatientPayload<ExtArgs>
        fields: Prisma.PatientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PatientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PatientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findFirst: {
            args: Prisma.PatientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PatientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          findMany: {
            args: Prisma.PatientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          create: {
            args: Prisma.PatientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          createMany: {
            args: Prisma.PatientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PatientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          delete: {
            args: Prisma.PatientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          update: {
            args: Prisma.PatientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          deleteMany: {
            args: Prisma.PatientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PatientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PatientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>[]
          }
          upsert: {
            args: Prisma.PatientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PatientPayload>
          }
          aggregate: {
            args: Prisma.PatientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePatient>
          }
          groupBy: {
            args: Prisma.PatientGroupByArgs<ExtArgs>
            result: $Utils.Optional<PatientGroupByOutputType>[]
          }
          count: {
            args: Prisma.PatientCountArgs<ExtArgs>
            result: $Utils.Optional<PatientCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      PostAdministrationForm: {
        payload: Prisma.$PostAdministrationFormPayload<ExtArgs>
        fields: Prisma.PostAdministrationFormFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PostAdministrationFormFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostAdministrationFormPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PostAdministrationFormFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostAdministrationFormPayload>
          }
          findFirst: {
            args: Prisma.PostAdministrationFormFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostAdministrationFormPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PostAdministrationFormFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostAdministrationFormPayload>
          }
          findMany: {
            args: Prisma.PostAdministrationFormFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostAdministrationFormPayload>[]
          }
          create: {
            args: Prisma.PostAdministrationFormCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostAdministrationFormPayload>
          }
          createMany: {
            args: Prisma.PostAdministrationFormCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PostAdministrationFormCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostAdministrationFormPayload>[]
          }
          delete: {
            args: Prisma.PostAdministrationFormDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostAdministrationFormPayload>
          }
          update: {
            args: Prisma.PostAdministrationFormUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostAdministrationFormPayload>
          }
          deleteMany: {
            args: Prisma.PostAdministrationFormDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PostAdministrationFormUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PostAdministrationFormUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostAdministrationFormPayload>[]
          }
          upsert: {
            args: Prisma.PostAdministrationFormUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PostAdministrationFormPayload>
          }
          aggregate: {
            args: Prisma.PostAdministrationFormAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePostAdministrationForm>
          }
          groupBy: {
            args: Prisma.PostAdministrationFormGroupByArgs<ExtArgs>
            result: $Utils.Optional<PostAdministrationFormGroupByOutputType>[]
          }
          count: {
            args: Prisma.PostAdministrationFormCountArgs<ExtArgs>
            result: $Utils.Optional<PostAdministrationFormCountAggregateOutputType> | number
          }
        }
      }
      Inventory: {
        payload: Prisma.$InventoryPayload<ExtArgs>
        fields: Prisma.InventoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.InventoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.InventoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findFirst: {
            args: Prisma.InventoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.InventoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          findMany: {
            args: Prisma.InventoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          create: {
            args: Prisma.InventoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          createMany: {
            args: Prisma.InventoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.InventoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          delete: {
            args: Prisma.InventoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          update: {
            args: Prisma.InventoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          deleteMany: {
            args: Prisma.InventoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.InventoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.InventoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>[]
          }
          upsert: {
            args: Prisma.InventoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$InventoryPayload>
          }
          aggregate: {
            args: Prisma.InventoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateInventory>
          }
          groupBy: {
            args: Prisma.InventoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<InventoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.InventoryCountArgs<ExtArgs>
            result: $Utils.Optional<InventoryCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    createdOrders: number
    ordersAsKam: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdOrders?: boolean | UserCountOutputTypeCountCreatedOrdersArgs
    ordersAsKam?: boolean | UserCountOutputTypeCountOrdersAsKamArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrdersAsKamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type CityCountOutputType
   */

  export type CityCountOutputType = {
    areas: number
    distributors: number
    orders: number
    patients: number
    users: number
  }

  export type CityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    areas?: boolean | CityCountOutputTypeCountAreasArgs
    distributors?: boolean | CityCountOutputTypeCountDistributorsArgs
    orders?: boolean | CityCountOutputTypeCountOrdersArgs
    patients?: boolean | CityCountOutputTypeCountPatientsArgs
    users?: boolean | CityCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CityCountOutputType
     */
    select?: CityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountAreasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AreaWhereInput
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountDistributorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistributorWhereInput
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountPatientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
  }

  /**
   * CityCountOutputType without action
   */
  export type CityCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type AreaCountOutputType
   */

  export type AreaCountOutputType = {
    distributors: number
    orders: number
    patients: number
    users: number
  }

  export type AreaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    distributors?: boolean | AreaCountOutputTypeCountDistributorsArgs
    orders?: boolean | AreaCountOutputTypeCountOrdersArgs
    patients?: boolean | AreaCountOutputTypeCountPatientsArgs
    users?: boolean | AreaCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AreaCountOutputType
     */
    select?: AreaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeCountDistributorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistributorWhereInput
  }

  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeCountPatientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
  }

  /**
   * AreaCountOutputType without action
   */
  export type AreaCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type DistributorCountOutputType
   */

  export type DistributorCountOutputType = {
    inventory: number
    orders: number
    users: number
  }

  export type DistributorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    inventory?: boolean | DistributorCountOutputTypeCountInventoryArgs
    orders?: boolean | DistributorCountOutputTypeCountOrdersArgs
    users?: boolean | DistributorCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * DistributorCountOutputType without action
   */
  export type DistributorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DistributorCountOutputType
     */
    select?: DistributorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DistributorCountOutputType without action
   */
  export type DistributorCountOutputTypeCountInventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
  }

  /**
   * DistributorCountOutputType without action
   */
  export type DistributorCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * DistributorCountOutputType without action
   */
  export type DistributorCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type PatientCountOutputType
   */

  export type PatientCountOutputType = {
    orders: number
    postForms: number
  }

  export type PatientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | PatientCountOutputTypeCountOrdersArgs
    postForms?: boolean | PatientCountOutputTypeCountPostFormsArgs
  }

  // Custom InputTypes
  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PatientCountOutputType
     */
    select?: PatientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * PatientCountOutputType without action
   */
  export type PatientCountOutputTypeCountPostFormsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostAdministrationFormWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    employeeCode: string | null
    phone: string | null
    cityId: string | null
    areaId: string | null
    distributorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    employeeCode: string | null
    phone: string | null
    cityId: string | null
    areaId: string | null
    distributorId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    employeeCode: number
    phone: number
    cityId: number
    areaId: number
    distributorId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    employeeCode?: true
    phone?: true
    cityId?: true
    areaId?: true
    distributorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    employeeCode?: true
    phone?: true
    cityId?: true
    areaId?: true
    distributorId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    employeeCode?: true
    phone?: true
    cityId?: true
    areaId?: true
    distributorId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string
    role: $Enums.Role
    employeeCode: string | null
    phone: string | null
    cityId: string | null
    areaId: string | null
    distributorId: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    employeeCode?: boolean
    phone?: boolean
    cityId?: boolean
    areaId?: boolean
    distributorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    createdOrders?: boolean | User$createdOrdersArgs<ExtArgs>
    ordersAsKam?: boolean | User$ordersAsKamArgs<ExtArgs>
    area?: boolean | User$areaArgs<ExtArgs>
    city?: boolean | User$cityArgs<ExtArgs>
    distributor?: boolean | User$distributorArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    employeeCode?: boolean
    phone?: boolean
    cityId?: boolean
    areaId?: boolean
    distributorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    area?: boolean | User$areaArgs<ExtArgs>
    city?: boolean | User$cityArgs<ExtArgs>
    distributor?: boolean | User$distributorArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    employeeCode?: boolean
    phone?: boolean
    cityId?: boolean
    areaId?: boolean
    distributorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    area?: boolean | User$areaArgs<ExtArgs>
    city?: boolean | User$cityArgs<ExtArgs>
    distributor?: boolean | User$distributorArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    employeeCode?: boolean
    phone?: boolean
    cityId?: boolean
    areaId?: boolean
    distributorId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdOrders?: boolean | User$createdOrdersArgs<ExtArgs>
    ordersAsKam?: boolean | User$ordersAsKamArgs<ExtArgs>
    area?: boolean | User$areaArgs<ExtArgs>
    city?: boolean | User$cityArgs<ExtArgs>
    distributor?: boolean | User$distributorArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | User$areaArgs<ExtArgs>
    city?: boolean | User$cityArgs<ExtArgs>
    distributor?: boolean | User$distributorArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | User$areaArgs<ExtArgs>
    city?: boolean | User$cityArgs<ExtArgs>
    distributor?: boolean | User$distributorArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      createdOrders: Prisma.$OrderPayload<ExtArgs>[]
      ordersAsKam: Prisma.$OrderPayload<ExtArgs>[]
      area: Prisma.$AreaPayload<ExtArgs> | null
      city: Prisma.$CityPayload<ExtArgs> | null
      distributor: Prisma.$DistributorPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      role: $Enums.Role
      employeeCode: string | null
      phone: string | null
      cityId: string | null
      areaId: string | null
      distributorId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn">>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdOrders<T extends User$createdOrdersArgs<ExtArgs> = {}>(args?: Subset<T, User$createdOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    ordersAsKam<T extends User$ordersAsKamArgs<ExtArgs> = {}>(args?: Subset<T, User$ordersAsKamArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    area<T extends User$areaArgs<ExtArgs> = {}>(args?: Subset<T, User$areaArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    city<T extends User$cityArgs<ExtArgs> = {}>(args?: Subset<T, User$cityArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    distributor<T extends User$distributorArgs<ExtArgs> = {}>(args?: Subset<T, User$distributorArgs<ExtArgs>>): Prisma__DistributorClient<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly employeeCode: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly cityId: FieldRef<"User", 'String'>
    readonly areaId: FieldRef<"User", 'String'>
    readonly distributorId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.createdOrders
   */
  export type User$createdOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.ordersAsKam
   */
  export type User$ordersAsKamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.area
   */
  export type User$areaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    where?: AreaWhereInput
  }

  /**
   * User.city
   */
  export type User$cityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    where?: CityWhereInput
  }

  /**
   * User.distributor
   */
  export type User$distributorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorInclude<ExtArgs> | null
    where?: DistributorWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model City
   */

  export type AggregateCity = {
    _count: CityCountAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  export type CityMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type CityMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type CityCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type CityMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type CityMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type CityCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type CityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which City to aggregate.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cities
    **/
    _count?: true | CityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CityMaxAggregateInputType
  }

  export type GetCityAggregateType<T extends CityAggregateArgs> = {
        [P in keyof T & keyof AggregateCity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCity[P]>
      : GetScalarType<T[P], AggregateCity[P]>
  }




  export type CityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CityWhereInput
    orderBy?: CityOrderByWithAggregationInput | CityOrderByWithAggregationInput[]
    by: CityScalarFieldEnum[] | CityScalarFieldEnum
    having?: CityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CityCountAggregateInputType | true
    _min?: CityMinAggregateInputType
    _max?: CityMaxAggregateInputType
  }

  export type CityGroupByOutputType = {
    id: string
    name: string
    _count: CityCountAggregateOutputType | null
    _min: CityMinAggregateOutputType | null
    _max: CityMaxAggregateOutputType | null
  }

  type GetCityGroupByPayload<T extends CityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CityGroupByOutputType[P]>
            : GetScalarType<T[P], CityGroupByOutputType[P]>
        }
      >
    >


  export type CitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    areas?: boolean | City$areasArgs<ExtArgs>
    distributors?: boolean | City$distributorsArgs<ExtArgs>
    orders?: boolean | City$ordersArgs<ExtArgs>
    patients?: boolean | City$patientsArgs<ExtArgs>
    users?: boolean | City$usersArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["city"]>

  export type CitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["city"]>

  export type CitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["city"]>

  export type CitySelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type CityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    areas?: boolean | City$areasArgs<ExtArgs>
    distributors?: boolean | City$distributorsArgs<ExtArgs>
    orders?: boolean | City$ordersArgs<ExtArgs>
    patients?: boolean | City$patientsArgs<ExtArgs>
    users?: boolean | City$usersArgs<ExtArgs>
    _count?: boolean | CityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "City"
    objects: {
      areas: Prisma.$AreaPayload<ExtArgs>[]
      distributors: Prisma.$DistributorPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      patients: Prisma.$PatientPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["city"]>
    composites: {}
  }

  type CityGetPayload<S extends boolean | null | undefined | CityDefaultArgs> = $Result.GetResult<Prisma.$CityPayload, S>

  type CityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CityFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CityCountAggregateInputType | true
    }

  export interface CityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['City'], meta: { name: 'City' } }
    /**
     * Find zero or one City that matches the filter.
     * @param {CityFindUniqueArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CityFindUniqueArgs>(args: SelectSubset<T, CityFindUniqueArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one City that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CityFindUniqueOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CityFindUniqueOrThrowArgs>(args: SelectSubset<T, CityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first City that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CityFindFirstArgs>(args?: SelectSubset<T, CityFindFirstArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first City that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindFirstOrThrowArgs} args - Arguments to find a City
     * @example
     * // Get one City
     * const city = await prisma.city.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CityFindFirstOrThrowArgs>(args?: SelectSubset<T, CityFindFirstOrThrowArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Cities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cities
     * const cities = await prisma.city.findMany()
     * 
     * // Get first 10 Cities
     * const cities = await prisma.city.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cityWithIdOnly = await prisma.city.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CityFindManyArgs>(args?: SelectSubset<T, CityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a City.
     * @param {CityCreateArgs} args - Arguments to create a City.
     * @example
     * // Create one City
     * const City = await prisma.city.create({
     *   data: {
     *     // ... data to create a City
     *   }
     * })
     * 
     */
    create<T extends CityCreateArgs>(args: SelectSubset<T, CityCreateArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Cities.
     * @param {CityCreateManyArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const city = await prisma.city.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CityCreateManyArgs>(args?: SelectSubset<T, CityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cities and returns the data saved in the database.
     * @param {CityCreateManyAndReturnArgs} args - Arguments to create many Cities.
     * @example
     * // Create many Cities
     * const city = await prisma.city.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cities and only return the `id`
     * const cityWithIdOnly = await prisma.city.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CityCreateManyAndReturnArgs>(args?: SelectSubset<T, CityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a City.
     * @param {CityDeleteArgs} args - Arguments to delete one City.
     * @example
     * // Delete one City
     * const City = await prisma.city.delete({
     *   where: {
     *     // ... filter to delete one City
     *   }
     * })
     * 
     */
    delete<T extends CityDeleteArgs>(args: SelectSubset<T, CityDeleteArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one City.
     * @param {CityUpdateArgs} args - Arguments to update one City.
     * @example
     * // Update one City
     * const city = await prisma.city.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CityUpdateArgs>(args: SelectSubset<T, CityUpdateArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Cities.
     * @param {CityDeleteManyArgs} args - Arguments to filter Cities to delete.
     * @example
     * // Delete a few Cities
     * const { count } = await prisma.city.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CityDeleteManyArgs>(args?: SelectSubset<T, CityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CityUpdateManyArgs>(args: SelectSubset<T, CityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cities and returns the data updated in the database.
     * @param {CityUpdateManyAndReturnArgs} args - Arguments to update many Cities.
     * @example
     * // Update many Cities
     * const city = await prisma.city.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cities and only return the `id`
     * const cityWithIdOnly = await prisma.city.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CityUpdateManyAndReturnArgs>(args: SelectSubset<T, CityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "updateManyAndReturn">>

    /**
     * Create or update one City.
     * @param {CityUpsertArgs} args - Arguments to update or create a City.
     * @example
     * // Update or create a City
     * const city = await prisma.city.upsert({
     *   create: {
     *     // ... data to create a City
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the City we want to update
     *   }
     * })
     */
    upsert<T extends CityUpsertArgs>(args: SelectSubset<T, CityUpsertArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Cities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityCountArgs} args - Arguments to filter Cities to count.
     * @example
     * // Count the number of Cities
     * const count = await prisma.city.count({
     *   where: {
     *     // ... the filter for the Cities we want to count
     *   }
     * })
    **/
    count<T extends CityCountArgs>(
      args?: Subset<T, CityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CityAggregateArgs>(args: Subset<T, CityAggregateArgs>): Prisma.PrismaPromise<GetCityAggregateType<T>>

    /**
     * Group by City.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CityGroupByArgs} args - Group by arguments.
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
      T extends CityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CityGroupByArgs['orderBy'] }
        : { orderBy?: CityGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the City model
   */
  readonly fields: CityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for City.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    areas<T extends City$areasArgs<ExtArgs> = {}>(args?: Subset<T, City$areasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findMany"> | Null>
    distributors<T extends City$distributorsArgs<ExtArgs> = {}>(args?: Subset<T, City$distributorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "findMany"> | Null>
    orders<T extends City$ordersArgs<ExtArgs> = {}>(args?: Subset<T, City$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    patients<T extends City$patientsArgs<ExtArgs> = {}>(args?: Subset<T, City$patientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany"> | Null>
    users<T extends City$usersArgs<ExtArgs> = {}>(args?: Subset<T, City$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the City model
   */ 
  interface CityFieldRefs {
    readonly id: FieldRef<"City", 'String'>
    readonly name: FieldRef<"City", 'String'>
  }
    

  // Custom InputTypes
  /**
   * City findUnique
   */
  export type CityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City findUniqueOrThrow
   */
  export type CityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City findFirst
   */
  export type CityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City findFirstOrThrow
   */
  export type CityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which City to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cities.
     */
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City findMany
   */
  export type CityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter, which Cities to fetch.
     */
    where?: CityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cities to fetch.
     */
    orderBy?: CityOrderByWithRelationInput | CityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cities.
     */
    cursor?: CityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cities.
     */
    skip?: number
    distinct?: CityScalarFieldEnum | CityScalarFieldEnum[]
  }

  /**
   * City create
   */
  export type CityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to create a City.
     */
    data: XOR<CityCreateInput, CityUncheckedCreateInput>
  }

  /**
   * City createMany
   */
  export type CityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cities.
     */
    data: CityCreateManyInput | CityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * City createManyAndReturn
   */
  export type CityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Cities.
     */
    data: CityCreateManyInput | CityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * City update
   */
  export type CityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The data needed to update a City.
     */
    data: XOR<CityUpdateInput, CityUncheckedUpdateInput>
    /**
     * Choose, which City to update.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City updateMany
   */
  export type CityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cities.
     */
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyInput>
    /**
     * Filter which Cities to update
     */
    where?: CityWhereInput
  }

  /**
   * City updateManyAndReturn
   */
  export type CityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * The data used to update Cities.
     */
    data: XOR<CityUpdateManyMutationInput, CityUncheckedUpdateManyInput>
    /**
     * Filter which Cities to update
     */
    where?: CityWhereInput
  }

  /**
   * City upsert
   */
  export type CityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * The filter to search for the City to update in case it exists.
     */
    where: CityWhereUniqueInput
    /**
     * In case the City found by the `where` argument doesn't exist, create a new City with this data.
     */
    create: XOR<CityCreateInput, CityUncheckedCreateInput>
    /**
     * In case the City was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CityUpdateInput, CityUncheckedUpdateInput>
  }

  /**
   * City delete
   */
  export type CityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    /**
     * Filter which City to delete.
     */
    where: CityWhereUniqueInput
  }

  /**
   * City deleteMany
   */
  export type CityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cities to delete
     */
    where?: CityWhereInput
  }

  /**
   * City.areas
   */
  export type City$areasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    where?: AreaWhereInput
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    cursor?: AreaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * City.distributors
   */
  export type City$distributorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorInclude<ExtArgs> | null
    where?: DistributorWhereInput
    orderBy?: DistributorOrderByWithRelationInput | DistributorOrderByWithRelationInput[]
    cursor?: DistributorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DistributorScalarFieldEnum | DistributorScalarFieldEnum[]
  }

  /**
   * City.orders
   */
  export type City$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * City.patients
   */
  export type City$patientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    cursor?: PatientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * City.users
   */
  export type City$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * City without action
   */
  export type CityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
  }


  /**
   * Model Area
   */

  export type AggregateArea = {
    _count: AreaCountAggregateOutputType | null
    _min: AreaMinAggregateOutputType | null
    _max: AreaMaxAggregateOutputType | null
  }

  export type AreaMinAggregateOutputType = {
    id: string | null
    name: string | null
    cityId: string | null
  }

  export type AreaMaxAggregateOutputType = {
    id: string | null
    name: string | null
    cityId: string | null
  }

  export type AreaCountAggregateOutputType = {
    id: number
    name: number
    cityId: number
    _all: number
  }


  export type AreaMinAggregateInputType = {
    id?: true
    name?: true
    cityId?: true
  }

  export type AreaMaxAggregateInputType = {
    id?: true
    name?: true
    cityId?: true
  }

  export type AreaCountAggregateInputType = {
    id?: true
    name?: true
    cityId?: true
    _all?: true
  }

  export type AreaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Area to aggregate.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Areas
    **/
    _count?: true | AreaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AreaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AreaMaxAggregateInputType
  }

  export type GetAreaAggregateType<T extends AreaAggregateArgs> = {
        [P in keyof T & keyof AggregateArea]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArea[P]>
      : GetScalarType<T[P], AggregateArea[P]>
  }




  export type AreaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AreaWhereInput
    orderBy?: AreaOrderByWithAggregationInput | AreaOrderByWithAggregationInput[]
    by: AreaScalarFieldEnum[] | AreaScalarFieldEnum
    having?: AreaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AreaCountAggregateInputType | true
    _min?: AreaMinAggregateInputType
    _max?: AreaMaxAggregateInputType
  }

  export type AreaGroupByOutputType = {
    id: string
    name: string
    cityId: string
    _count: AreaCountAggregateOutputType | null
    _min: AreaMinAggregateOutputType | null
    _max: AreaMaxAggregateOutputType | null
  }

  type GetAreaGroupByPayload<T extends AreaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AreaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AreaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AreaGroupByOutputType[P]>
            : GetScalarType<T[P], AreaGroupByOutputType[P]>
        }
      >
    >


  export type AreaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cityId?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
    distributors?: boolean | Area$distributorsArgs<ExtArgs>
    orders?: boolean | Area$ordersArgs<ExtArgs>
    patients?: boolean | Area$patientsArgs<ExtArgs>
    users?: boolean | Area$usersArgs<ExtArgs>
    _count?: boolean | AreaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["area"]>

  export type AreaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cityId?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["area"]>

  export type AreaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cityId?: boolean
    city?: boolean | CityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["area"]>

  export type AreaSelectScalar = {
    id?: boolean
    name?: boolean
    cityId?: boolean
  }

  export type AreaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
    distributors?: boolean | Area$distributorsArgs<ExtArgs>
    orders?: boolean | Area$ordersArgs<ExtArgs>
    patients?: boolean | Area$patientsArgs<ExtArgs>
    users?: boolean | Area$usersArgs<ExtArgs>
    _count?: boolean | AreaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AreaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
  }
  export type AreaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    city?: boolean | CityDefaultArgs<ExtArgs>
  }

  export type $AreaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Area"
    objects: {
      city: Prisma.$CityPayload<ExtArgs>
      distributors: Prisma.$DistributorPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      patients: Prisma.$PatientPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      cityId: string
    }, ExtArgs["result"]["area"]>
    composites: {}
  }

  type AreaGetPayload<S extends boolean | null | undefined | AreaDefaultArgs> = $Result.GetResult<Prisma.$AreaPayload, S>

  type AreaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AreaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AreaCountAggregateInputType | true
    }

  export interface AreaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Area'], meta: { name: 'Area' } }
    /**
     * Find zero or one Area that matches the filter.
     * @param {AreaFindUniqueArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AreaFindUniqueArgs>(args: SelectSubset<T, AreaFindUniqueArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Area that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AreaFindUniqueOrThrowArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AreaFindUniqueOrThrowArgs>(args: SelectSubset<T, AreaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Area that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindFirstArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AreaFindFirstArgs>(args?: SelectSubset<T, AreaFindFirstArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Area that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindFirstOrThrowArgs} args - Arguments to find a Area
     * @example
     * // Get one Area
     * const area = await prisma.area.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AreaFindFirstOrThrowArgs>(args?: SelectSubset<T, AreaFindFirstOrThrowArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Areas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Areas
     * const areas = await prisma.area.findMany()
     * 
     * // Get first 10 Areas
     * const areas = await prisma.area.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const areaWithIdOnly = await prisma.area.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AreaFindManyArgs>(args?: SelectSubset<T, AreaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Area.
     * @param {AreaCreateArgs} args - Arguments to create a Area.
     * @example
     * // Create one Area
     * const Area = await prisma.area.create({
     *   data: {
     *     // ... data to create a Area
     *   }
     * })
     * 
     */
    create<T extends AreaCreateArgs>(args: SelectSubset<T, AreaCreateArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Areas.
     * @param {AreaCreateManyArgs} args - Arguments to create many Areas.
     * @example
     * // Create many Areas
     * const area = await prisma.area.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AreaCreateManyArgs>(args?: SelectSubset<T, AreaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Areas and returns the data saved in the database.
     * @param {AreaCreateManyAndReturnArgs} args - Arguments to create many Areas.
     * @example
     * // Create many Areas
     * const area = await prisma.area.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Areas and only return the `id`
     * const areaWithIdOnly = await prisma.area.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AreaCreateManyAndReturnArgs>(args?: SelectSubset<T, AreaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Area.
     * @param {AreaDeleteArgs} args - Arguments to delete one Area.
     * @example
     * // Delete one Area
     * const Area = await prisma.area.delete({
     *   where: {
     *     // ... filter to delete one Area
     *   }
     * })
     * 
     */
    delete<T extends AreaDeleteArgs>(args: SelectSubset<T, AreaDeleteArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Area.
     * @param {AreaUpdateArgs} args - Arguments to update one Area.
     * @example
     * // Update one Area
     * const area = await prisma.area.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AreaUpdateArgs>(args: SelectSubset<T, AreaUpdateArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Areas.
     * @param {AreaDeleteManyArgs} args - Arguments to filter Areas to delete.
     * @example
     * // Delete a few Areas
     * const { count } = await prisma.area.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AreaDeleteManyArgs>(args?: SelectSubset<T, AreaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Areas
     * const area = await prisma.area.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AreaUpdateManyArgs>(args: SelectSubset<T, AreaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Areas and returns the data updated in the database.
     * @param {AreaUpdateManyAndReturnArgs} args - Arguments to update many Areas.
     * @example
     * // Update many Areas
     * const area = await prisma.area.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Areas and only return the `id`
     * const areaWithIdOnly = await prisma.area.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AreaUpdateManyAndReturnArgs>(args: SelectSubset<T, AreaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "updateManyAndReturn">>

    /**
     * Create or update one Area.
     * @param {AreaUpsertArgs} args - Arguments to update or create a Area.
     * @example
     * // Update or create a Area
     * const area = await prisma.area.upsert({
     *   create: {
     *     // ... data to create a Area
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Area we want to update
     *   }
     * })
     */
    upsert<T extends AreaUpsertArgs>(args: SelectSubset<T, AreaUpsertArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Areas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaCountArgs} args - Arguments to filter Areas to count.
     * @example
     * // Count the number of Areas
     * const count = await prisma.area.count({
     *   where: {
     *     // ... the filter for the Areas we want to count
     *   }
     * })
    **/
    count<T extends AreaCountArgs>(
      args?: Subset<T, AreaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AreaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AreaAggregateArgs>(args: Subset<T, AreaAggregateArgs>): Prisma.PrismaPromise<GetAreaAggregateType<T>>

    /**
     * Group by Area.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AreaGroupByArgs} args - Group by arguments.
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
      T extends AreaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AreaGroupByArgs['orderBy'] }
        : { orderBy?: AreaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AreaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAreaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Area model
   */
  readonly fields: AreaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Area.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AreaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    city<T extends CityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CityDefaultArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    distributors<T extends Area$distributorsArgs<ExtArgs> = {}>(args?: Subset<T, Area$distributorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "findMany"> | Null>
    orders<T extends Area$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Area$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    patients<T extends Area$patientsArgs<ExtArgs> = {}>(args?: Subset<T, Area$patientsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany"> | Null>
    users<T extends Area$usersArgs<ExtArgs> = {}>(args?: Subset<T, Area$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Area model
   */ 
  interface AreaFieldRefs {
    readonly id: FieldRef<"Area", 'String'>
    readonly name: FieldRef<"Area", 'String'>
    readonly cityId: FieldRef<"Area", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Area findUnique
   */
  export type AreaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area findUniqueOrThrow
   */
  export type AreaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area findFirst
   */
  export type AreaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area findFirstOrThrow
   */
  export type AreaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Area to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Areas.
     */
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area findMany
   */
  export type AreaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter, which Areas to fetch.
     */
    where?: AreaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Areas to fetch.
     */
    orderBy?: AreaOrderByWithRelationInput | AreaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Areas.
     */
    cursor?: AreaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Areas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Areas.
     */
    skip?: number
    distinct?: AreaScalarFieldEnum | AreaScalarFieldEnum[]
  }

  /**
   * Area create
   */
  export type AreaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The data needed to create a Area.
     */
    data: XOR<AreaCreateInput, AreaUncheckedCreateInput>
  }

  /**
   * Area createMany
   */
  export type AreaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Areas.
     */
    data: AreaCreateManyInput | AreaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Area createManyAndReturn
   */
  export type AreaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Areas.
     */
    data: AreaCreateManyInput | AreaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Area update
   */
  export type AreaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The data needed to update a Area.
     */
    data: XOR<AreaUpdateInput, AreaUncheckedUpdateInput>
    /**
     * Choose, which Area to update.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area updateMany
   */
  export type AreaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Areas.
     */
    data: XOR<AreaUpdateManyMutationInput, AreaUncheckedUpdateManyInput>
    /**
     * Filter which Areas to update
     */
    where?: AreaWhereInput
  }

  /**
   * Area updateManyAndReturn
   */
  export type AreaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * The data used to update Areas.
     */
    data: XOR<AreaUpdateManyMutationInput, AreaUncheckedUpdateManyInput>
    /**
     * Filter which Areas to update
     */
    where?: AreaWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Area upsert
   */
  export type AreaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * The filter to search for the Area to update in case it exists.
     */
    where: AreaWhereUniqueInput
    /**
     * In case the Area found by the `where` argument doesn't exist, create a new Area with this data.
     */
    create: XOR<AreaCreateInput, AreaUncheckedCreateInput>
    /**
     * In case the Area was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AreaUpdateInput, AreaUncheckedUpdateInput>
  }

  /**
   * Area delete
   */
  export type AreaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    /**
     * Filter which Area to delete.
     */
    where: AreaWhereUniqueInput
  }

  /**
   * Area deleteMany
   */
  export type AreaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Areas to delete
     */
    where?: AreaWhereInput
  }

  /**
   * Area.distributors
   */
  export type Area$distributorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorInclude<ExtArgs> | null
    where?: DistributorWhereInput
    orderBy?: DistributorOrderByWithRelationInput | DistributorOrderByWithRelationInput[]
    cursor?: DistributorWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DistributorScalarFieldEnum | DistributorScalarFieldEnum[]
  }

  /**
   * Area.orders
   */
  export type Area$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Area.patients
   */
  export type Area$patientsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    cursor?: PatientWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Area.users
   */
  export type Area$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Area without action
   */
  export type AreaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
  }


  /**
   * Model Distributor
   */

  export type AggregateDistributor = {
    _count: DistributorCountAggregateOutputType | null
    _min: DistributorMinAggregateOutputType | null
    _max: DistributorMaxAggregateOutputType | null
  }

  export type DistributorMinAggregateOutputType = {
    id: string | null
    name: string | null
    cityId: string | null
    areaId: string | null
  }

  export type DistributorMaxAggregateOutputType = {
    id: string | null
    name: string | null
    cityId: string | null
    areaId: string | null
  }

  export type DistributorCountAggregateOutputType = {
    id: number
    name: number
    cityId: number
    areaId: number
    _all: number
  }


  export type DistributorMinAggregateInputType = {
    id?: true
    name?: true
    cityId?: true
    areaId?: true
  }

  export type DistributorMaxAggregateInputType = {
    id?: true
    name?: true
    cityId?: true
    areaId?: true
  }

  export type DistributorCountAggregateInputType = {
    id?: true
    name?: true
    cityId?: true
    areaId?: true
    _all?: true
  }

  export type DistributorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Distributor to aggregate.
     */
    where?: DistributorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distributors to fetch.
     */
    orderBy?: DistributorOrderByWithRelationInput | DistributorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DistributorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distributors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distributors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Distributors
    **/
    _count?: true | DistributorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DistributorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DistributorMaxAggregateInputType
  }

  export type GetDistributorAggregateType<T extends DistributorAggregateArgs> = {
        [P in keyof T & keyof AggregateDistributor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDistributor[P]>
      : GetScalarType<T[P], AggregateDistributor[P]>
  }




  export type DistributorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DistributorWhereInput
    orderBy?: DistributorOrderByWithAggregationInput | DistributorOrderByWithAggregationInput[]
    by: DistributorScalarFieldEnum[] | DistributorScalarFieldEnum
    having?: DistributorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DistributorCountAggregateInputType | true
    _min?: DistributorMinAggregateInputType
    _max?: DistributorMaxAggregateInputType
  }

  export type DistributorGroupByOutputType = {
    id: string
    name: string
    cityId: string
    areaId: string
    _count: DistributorCountAggregateOutputType | null
    _min: DistributorMinAggregateOutputType | null
    _max: DistributorMaxAggregateOutputType | null
  }

  type GetDistributorGroupByPayload<T extends DistributorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DistributorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DistributorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DistributorGroupByOutputType[P]>
            : GetScalarType<T[P], DistributorGroupByOutputType[P]>
        }
      >
    >


  export type DistributorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cityId?: boolean
    areaId?: boolean
    area?: boolean | AreaDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
    inventory?: boolean | Distributor$inventoryArgs<ExtArgs>
    orders?: boolean | Distributor$ordersArgs<ExtArgs>
    users?: boolean | Distributor$usersArgs<ExtArgs>
    _count?: boolean | DistributorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distributor"]>

  export type DistributorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cityId?: boolean
    areaId?: boolean
    area?: boolean | AreaDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distributor"]>

  export type DistributorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    cityId?: boolean
    areaId?: boolean
    area?: boolean | AreaDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["distributor"]>

  export type DistributorSelectScalar = {
    id?: boolean
    name?: boolean
    cityId?: boolean
    areaId?: boolean
  }

  export type DistributorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | AreaDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
    inventory?: boolean | Distributor$inventoryArgs<ExtArgs>
    orders?: boolean | Distributor$ordersArgs<ExtArgs>
    users?: boolean | Distributor$usersArgs<ExtArgs>
    _count?: boolean | DistributorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DistributorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | AreaDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
  }
  export type DistributorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | AreaDefaultArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
  }

  export type $DistributorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Distributor"
    objects: {
      area: Prisma.$AreaPayload<ExtArgs>
      city: Prisma.$CityPayload<ExtArgs>
      inventory: Prisma.$InventoryPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      cityId: string
      areaId: string
    }, ExtArgs["result"]["distributor"]>
    composites: {}
  }

  type DistributorGetPayload<S extends boolean | null | undefined | DistributorDefaultArgs> = $Result.GetResult<Prisma.$DistributorPayload, S>

  type DistributorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DistributorFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DistributorCountAggregateInputType | true
    }

  export interface DistributorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Distributor'], meta: { name: 'Distributor' } }
    /**
     * Find zero or one Distributor that matches the filter.
     * @param {DistributorFindUniqueArgs} args - Arguments to find a Distributor
     * @example
     * // Get one Distributor
     * const distributor = await prisma.distributor.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DistributorFindUniqueArgs>(args: SelectSubset<T, DistributorFindUniqueArgs<ExtArgs>>): Prisma__DistributorClient<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Distributor that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DistributorFindUniqueOrThrowArgs} args - Arguments to find a Distributor
     * @example
     * // Get one Distributor
     * const distributor = await prisma.distributor.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DistributorFindUniqueOrThrowArgs>(args: SelectSubset<T, DistributorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DistributorClient<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Distributor that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorFindFirstArgs} args - Arguments to find a Distributor
     * @example
     * // Get one Distributor
     * const distributor = await prisma.distributor.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DistributorFindFirstArgs>(args?: SelectSubset<T, DistributorFindFirstArgs<ExtArgs>>): Prisma__DistributorClient<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Distributor that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorFindFirstOrThrowArgs} args - Arguments to find a Distributor
     * @example
     * // Get one Distributor
     * const distributor = await prisma.distributor.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DistributorFindFirstOrThrowArgs>(args?: SelectSubset<T, DistributorFindFirstOrThrowArgs<ExtArgs>>): Prisma__DistributorClient<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Distributors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Distributors
     * const distributors = await prisma.distributor.findMany()
     * 
     * // Get first 10 Distributors
     * const distributors = await prisma.distributor.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const distributorWithIdOnly = await prisma.distributor.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DistributorFindManyArgs>(args?: SelectSubset<T, DistributorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Distributor.
     * @param {DistributorCreateArgs} args - Arguments to create a Distributor.
     * @example
     * // Create one Distributor
     * const Distributor = await prisma.distributor.create({
     *   data: {
     *     // ... data to create a Distributor
     *   }
     * })
     * 
     */
    create<T extends DistributorCreateArgs>(args: SelectSubset<T, DistributorCreateArgs<ExtArgs>>): Prisma__DistributorClient<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Distributors.
     * @param {DistributorCreateManyArgs} args - Arguments to create many Distributors.
     * @example
     * // Create many Distributors
     * const distributor = await prisma.distributor.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DistributorCreateManyArgs>(args?: SelectSubset<T, DistributorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Distributors and returns the data saved in the database.
     * @param {DistributorCreateManyAndReturnArgs} args - Arguments to create many Distributors.
     * @example
     * // Create many Distributors
     * const distributor = await prisma.distributor.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Distributors and only return the `id`
     * const distributorWithIdOnly = await prisma.distributor.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DistributorCreateManyAndReturnArgs>(args?: SelectSubset<T, DistributorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Distributor.
     * @param {DistributorDeleteArgs} args - Arguments to delete one Distributor.
     * @example
     * // Delete one Distributor
     * const Distributor = await prisma.distributor.delete({
     *   where: {
     *     // ... filter to delete one Distributor
     *   }
     * })
     * 
     */
    delete<T extends DistributorDeleteArgs>(args: SelectSubset<T, DistributorDeleteArgs<ExtArgs>>): Prisma__DistributorClient<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Distributor.
     * @param {DistributorUpdateArgs} args - Arguments to update one Distributor.
     * @example
     * // Update one Distributor
     * const distributor = await prisma.distributor.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DistributorUpdateArgs>(args: SelectSubset<T, DistributorUpdateArgs<ExtArgs>>): Prisma__DistributorClient<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Distributors.
     * @param {DistributorDeleteManyArgs} args - Arguments to filter Distributors to delete.
     * @example
     * // Delete a few Distributors
     * const { count } = await prisma.distributor.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DistributorDeleteManyArgs>(args?: SelectSubset<T, DistributorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Distributors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Distributors
     * const distributor = await prisma.distributor.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DistributorUpdateManyArgs>(args: SelectSubset<T, DistributorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Distributors and returns the data updated in the database.
     * @param {DistributorUpdateManyAndReturnArgs} args - Arguments to update many Distributors.
     * @example
     * // Update many Distributors
     * const distributor = await prisma.distributor.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Distributors and only return the `id`
     * const distributorWithIdOnly = await prisma.distributor.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DistributorUpdateManyAndReturnArgs>(args: SelectSubset<T, DistributorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "updateManyAndReturn">>

    /**
     * Create or update one Distributor.
     * @param {DistributorUpsertArgs} args - Arguments to update or create a Distributor.
     * @example
     * // Update or create a Distributor
     * const distributor = await prisma.distributor.upsert({
     *   create: {
     *     // ... data to create a Distributor
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Distributor we want to update
     *   }
     * })
     */
    upsert<T extends DistributorUpsertArgs>(args: SelectSubset<T, DistributorUpsertArgs<ExtArgs>>): Prisma__DistributorClient<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Distributors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorCountArgs} args - Arguments to filter Distributors to count.
     * @example
     * // Count the number of Distributors
     * const count = await prisma.distributor.count({
     *   where: {
     *     // ... the filter for the Distributors we want to count
     *   }
     * })
    **/
    count<T extends DistributorCountArgs>(
      args?: Subset<T, DistributorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DistributorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Distributor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DistributorAggregateArgs>(args: Subset<T, DistributorAggregateArgs>): Prisma.PrismaPromise<GetDistributorAggregateType<T>>

    /**
     * Group by Distributor.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DistributorGroupByArgs} args - Group by arguments.
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
      T extends DistributorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DistributorGroupByArgs['orderBy'] }
        : { orderBy?: DistributorGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DistributorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDistributorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Distributor model
   */
  readonly fields: DistributorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Distributor.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DistributorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    area<T extends AreaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AreaDefaultArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    city<T extends CityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CityDefaultArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    inventory<T extends Distributor$inventoryArgs<ExtArgs> = {}>(args?: Subset<T, Distributor$inventoryArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany"> | Null>
    orders<T extends Distributor$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Distributor$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    users<T extends Distributor$usersArgs<ExtArgs> = {}>(args?: Subset<T, Distributor$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Distributor model
   */ 
  interface DistributorFieldRefs {
    readonly id: FieldRef<"Distributor", 'String'>
    readonly name: FieldRef<"Distributor", 'String'>
    readonly cityId: FieldRef<"Distributor", 'String'>
    readonly areaId: FieldRef<"Distributor", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Distributor findUnique
   */
  export type DistributorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorInclude<ExtArgs> | null
    /**
     * Filter, which Distributor to fetch.
     */
    where: DistributorWhereUniqueInput
  }

  /**
   * Distributor findUniqueOrThrow
   */
  export type DistributorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorInclude<ExtArgs> | null
    /**
     * Filter, which Distributor to fetch.
     */
    where: DistributorWhereUniqueInput
  }

  /**
   * Distributor findFirst
   */
  export type DistributorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorInclude<ExtArgs> | null
    /**
     * Filter, which Distributor to fetch.
     */
    where?: DistributorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distributors to fetch.
     */
    orderBy?: DistributorOrderByWithRelationInput | DistributorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Distributors.
     */
    cursor?: DistributorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distributors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distributors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Distributors.
     */
    distinct?: DistributorScalarFieldEnum | DistributorScalarFieldEnum[]
  }

  /**
   * Distributor findFirstOrThrow
   */
  export type DistributorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorInclude<ExtArgs> | null
    /**
     * Filter, which Distributor to fetch.
     */
    where?: DistributorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distributors to fetch.
     */
    orderBy?: DistributorOrderByWithRelationInput | DistributorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Distributors.
     */
    cursor?: DistributorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distributors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distributors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Distributors.
     */
    distinct?: DistributorScalarFieldEnum | DistributorScalarFieldEnum[]
  }

  /**
   * Distributor findMany
   */
  export type DistributorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorInclude<ExtArgs> | null
    /**
     * Filter, which Distributors to fetch.
     */
    where?: DistributorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Distributors to fetch.
     */
    orderBy?: DistributorOrderByWithRelationInput | DistributorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Distributors.
     */
    cursor?: DistributorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Distributors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Distributors.
     */
    skip?: number
    distinct?: DistributorScalarFieldEnum | DistributorScalarFieldEnum[]
  }

  /**
   * Distributor create
   */
  export type DistributorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorInclude<ExtArgs> | null
    /**
     * The data needed to create a Distributor.
     */
    data: XOR<DistributorCreateInput, DistributorUncheckedCreateInput>
  }

  /**
   * Distributor createMany
   */
  export type DistributorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Distributors.
     */
    data: DistributorCreateManyInput | DistributorCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Distributor createManyAndReturn
   */
  export type DistributorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Distributors.
     */
    data: DistributorCreateManyInput | DistributorCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Distributor update
   */
  export type DistributorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorInclude<ExtArgs> | null
    /**
     * The data needed to update a Distributor.
     */
    data: XOR<DistributorUpdateInput, DistributorUncheckedUpdateInput>
    /**
     * Choose, which Distributor to update.
     */
    where: DistributorWhereUniqueInput
  }

  /**
   * Distributor updateMany
   */
  export type DistributorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Distributors.
     */
    data: XOR<DistributorUpdateManyMutationInput, DistributorUncheckedUpdateManyInput>
    /**
     * Filter which Distributors to update
     */
    where?: DistributorWhereInput
  }

  /**
   * Distributor updateManyAndReturn
   */
  export type DistributorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * The data used to update Distributors.
     */
    data: XOR<DistributorUpdateManyMutationInput, DistributorUncheckedUpdateManyInput>
    /**
     * Filter which Distributors to update
     */
    where?: DistributorWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Distributor upsert
   */
  export type DistributorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorInclude<ExtArgs> | null
    /**
     * The filter to search for the Distributor to update in case it exists.
     */
    where: DistributorWhereUniqueInput
    /**
     * In case the Distributor found by the `where` argument doesn't exist, create a new Distributor with this data.
     */
    create: XOR<DistributorCreateInput, DistributorUncheckedCreateInput>
    /**
     * In case the Distributor was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DistributorUpdateInput, DistributorUncheckedUpdateInput>
  }

  /**
   * Distributor delete
   */
  export type DistributorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorInclude<ExtArgs> | null
    /**
     * Filter which Distributor to delete.
     */
    where: DistributorWhereUniqueInput
  }

  /**
   * Distributor deleteMany
   */
  export type DistributorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Distributors to delete
     */
    where?: DistributorWhereInput
  }

  /**
   * Distributor.inventory
   */
  export type Distributor$inventoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    cursor?: InventoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Distributor.orders
   */
  export type Distributor$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Distributor.users
   */
  export type Distributor$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Distributor without action
   */
  export type DistributorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorInclude<ExtArgs> | null
  }


  /**
   * Model Patient
   */

  export type AggregatePatient = {
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  export type PatientMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    address: string | null
    cityId: string | null
    areaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    email: string | null
    address: string | null
    cityId: string | null
    areaId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PatientCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    email: number
    address: number
    cityId: number
    areaId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PatientMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    address?: true
    cityId?: true
    areaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    address?: true
    cityId?: true
    areaId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PatientCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    email?: true
    address?: true
    cityId?: true
    areaId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PatientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patient to aggregate.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Patients
    **/
    _count?: true | PatientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PatientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PatientMaxAggregateInputType
  }

  export type GetPatientAggregateType<T extends PatientAggregateArgs> = {
        [P in keyof T & keyof AggregatePatient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePatient[P]>
      : GetScalarType<T[P], AggregatePatient[P]>
  }




  export type PatientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PatientWhereInput
    orderBy?: PatientOrderByWithAggregationInput | PatientOrderByWithAggregationInput[]
    by: PatientScalarFieldEnum[] | PatientScalarFieldEnum
    having?: PatientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PatientCountAggregateInputType | true
    _min?: PatientMinAggregateInputType
    _max?: PatientMaxAggregateInputType
  }

  export type PatientGroupByOutputType = {
    id: string
    name: string
    phone: string
    email: string | null
    address: string | null
    cityId: string | null
    areaId: string | null
    createdAt: Date
    updatedAt: Date
    _count: PatientCountAggregateOutputType | null
    _min: PatientMinAggregateOutputType | null
    _max: PatientMaxAggregateOutputType | null
  }

  type GetPatientGroupByPayload<T extends PatientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PatientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PatientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PatientGroupByOutputType[P]>
            : GetScalarType<T[P], PatientGroupByOutputType[P]>
        }
      >
    >


  export type PatientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    cityId?: boolean
    areaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orders?: boolean | Patient$ordersArgs<ExtArgs>
    area?: boolean | Patient$areaArgs<ExtArgs>
    city?: boolean | Patient$cityArgs<ExtArgs>
    postForms?: boolean | Patient$postFormsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    cityId?: boolean
    areaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    area?: boolean | Patient$areaArgs<ExtArgs>
    city?: boolean | Patient$cityArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    cityId?: boolean
    areaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    area?: boolean | Patient$areaArgs<ExtArgs>
    city?: boolean | Patient$cityArgs<ExtArgs>
  }, ExtArgs["result"]["patient"]>

  export type PatientSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    email?: boolean
    address?: boolean
    cityId?: boolean
    areaId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PatientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | Patient$ordersArgs<ExtArgs>
    area?: boolean | Patient$areaArgs<ExtArgs>
    city?: boolean | Patient$cityArgs<ExtArgs>
    postForms?: boolean | Patient$postFormsArgs<ExtArgs>
    _count?: boolean | PatientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PatientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | Patient$areaArgs<ExtArgs>
    city?: boolean | Patient$cityArgs<ExtArgs>
  }
  export type PatientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | Patient$areaArgs<ExtArgs>
    city?: boolean | Patient$cityArgs<ExtArgs>
  }

  export type $PatientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Patient"
    objects: {
      orders: Prisma.$OrderPayload<ExtArgs>[]
      area: Prisma.$AreaPayload<ExtArgs> | null
      city: Prisma.$CityPayload<ExtArgs> | null
      postForms: Prisma.$PostAdministrationFormPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string
      email: string | null
      address: string | null
      cityId: string | null
      areaId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["patient"]>
    composites: {}
  }

  type PatientGetPayload<S extends boolean | null | undefined | PatientDefaultArgs> = $Result.GetResult<Prisma.$PatientPayload, S>

  type PatientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PatientFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PatientCountAggregateInputType | true
    }

  export interface PatientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Patient'], meta: { name: 'Patient' } }
    /**
     * Find zero or one Patient that matches the filter.
     * @param {PatientFindUniqueArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PatientFindUniqueArgs>(args: SelectSubset<T, PatientFindUniqueArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Patient that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PatientFindUniqueOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PatientFindUniqueOrThrowArgs>(args: SelectSubset<T, PatientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Patient that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PatientFindFirstArgs>(args?: SelectSubset<T, PatientFindFirstArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Patient that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindFirstOrThrowArgs} args - Arguments to find a Patient
     * @example
     * // Get one Patient
     * const patient = await prisma.patient.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PatientFindFirstOrThrowArgs>(args?: SelectSubset<T, PatientFindFirstOrThrowArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Patients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Patients
     * const patients = await prisma.patient.findMany()
     * 
     * // Get first 10 Patients
     * const patients = await prisma.patient.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const patientWithIdOnly = await prisma.patient.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PatientFindManyArgs>(args?: SelectSubset<T, PatientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Patient.
     * @param {PatientCreateArgs} args - Arguments to create a Patient.
     * @example
     * // Create one Patient
     * const Patient = await prisma.patient.create({
     *   data: {
     *     // ... data to create a Patient
     *   }
     * })
     * 
     */
    create<T extends PatientCreateArgs>(args: SelectSubset<T, PatientCreateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Patients.
     * @param {PatientCreateManyArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PatientCreateManyArgs>(args?: SelectSubset<T, PatientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Patients and returns the data saved in the database.
     * @param {PatientCreateManyAndReturnArgs} args - Arguments to create many Patients.
     * @example
     * // Create many Patients
     * const patient = await prisma.patient.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PatientCreateManyAndReturnArgs>(args?: SelectSubset<T, PatientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Patient.
     * @param {PatientDeleteArgs} args - Arguments to delete one Patient.
     * @example
     * // Delete one Patient
     * const Patient = await prisma.patient.delete({
     *   where: {
     *     // ... filter to delete one Patient
     *   }
     * })
     * 
     */
    delete<T extends PatientDeleteArgs>(args: SelectSubset<T, PatientDeleteArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Patient.
     * @param {PatientUpdateArgs} args - Arguments to update one Patient.
     * @example
     * // Update one Patient
     * const patient = await prisma.patient.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PatientUpdateArgs>(args: SelectSubset<T, PatientUpdateArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Patients.
     * @param {PatientDeleteManyArgs} args - Arguments to filter Patients to delete.
     * @example
     * // Delete a few Patients
     * const { count } = await prisma.patient.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PatientDeleteManyArgs>(args?: SelectSubset<T, PatientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PatientUpdateManyArgs>(args: SelectSubset<T, PatientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Patients and returns the data updated in the database.
     * @param {PatientUpdateManyAndReturnArgs} args - Arguments to update many Patients.
     * @example
     * // Update many Patients
     * const patient = await prisma.patient.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Patients and only return the `id`
     * const patientWithIdOnly = await prisma.patient.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PatientUpdateManyAndReturnArgs>(args: SelectSubset<T, PatientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "updateManyAndReturn">>

    /**
     * Create or update one Patient.
     * @param {PatientUpsertArgs} args - Arguments to update or create a Patient.
     * @example
     * // Update or create a Patient
     * const patient = await prisma.patient.upsert({
     *   create: {
     *     // ... data to create a Patient
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Patient we want to update
     *   }
     * })
     */
    upsert<T extends PatientUpsertArgs>(args: SelectSubset<T, PatientUpsertArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Patients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientCountArgs} args - Arguments to filter Patients to count.
     * @example
     * // Count the number of Patients
     * const count = await prisma.patient.count({
     *   where: {
     *     // ... the filter for the Patients we want to count
     *   }
     * })
    **/
    count<T extends PatientCountArgs>(
      args?: Subset<T, PatientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PatientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PatientAggregateArgs>(args: Subset<T, PatientAggregateArgs>): Prisma.PrismaPromise<GetPatientAggregateType<T>>

    /**
     * Group by Patient.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PatientGroupByArgs} args - Group by arguments.
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
      T extends PatientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PatientGroupByArgs['orderBy'] }
        : { orderBy?: PatientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PatientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPatientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Patient model
   */
  readonly fields: PatientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Patient.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PatientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends Patient$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Patient$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany"> | Null>
    area<T extends Patient$areaArgs<ExtArgs> = {}>(args?: Subset<T, Patient$areaArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    city<T extends Patient$cityArgs<ExtArgs> = {}>(args?: Subset<T, Patient$cityArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    postForms<T extends Patient$postFormsArgs<ExtArgs> = {}>(args?: Subset<T, Patient$postFormsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostAdministrationFormPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Patient model
   */ 
  interface PatientFieldRefs {
    readonly id: FieldRef<"Patient", 'String'>
    readonly name: FieldRef<"Patient", 'String'>
    readonly phone: FieldRef<"Patient", 'String'>
    readonly email: FieldRef<"Patient", 'String'>
    readonly address: FieldRef<"Patient", 'String'>
    readonly cityId: FieldRef<"Patient", 'String'>
    readonly areaId: FieldRef<"Patient", 'String'>
    readonly createdAt: FieldRef<"Patient", 'DateTime'>
    readonly updatedAt: FieldRef<"Patient", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Patient findUnique
   */
  export type PatientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findUniqueOrThrow
   */
  export type PatientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient findFirst
   */
  export type PatientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findFirstOrThrow
   */
  export type PatientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patient to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Patients.
     */
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient findMany
   */
  export type PatientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter, which Patients to fetch.
     */
    where?: PatientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Patients to fetch.
     */
    orderBy?: PatientOrderByWithRelationInput | PatientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Patients.
     */
    cursor?: PatientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Patients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Patients.
     */
    skip?: number
    distinct?: PatientScalarFieldEnum | PatientScalarFieldEnum[]
  }

  /**
   * Patient create
   */
  export type PatientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to create a Patient.
     */
    data: XOR<PatientCreateInput, PatientUncheckedCreateInput>
  }

  /**
   * Patient createMany
   */
  export type PatientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Patient createManyAndReturn
   */
  export type PatientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Patients.
     */
    data: PatientCreateManyInput | PatientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient update
   */
  export type PatientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The data needed to update a Patient.
     */
    data: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
    /**
     * Choose, which Patient to update.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient updateMany
   */
  export type PatientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
  }

  /**
   * Patient updateManyAndReturn
   */
  export type PatientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * The data used to update Patients.
     */
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyInput>
    /**
     * Filter which Patients to update
     */
    where?: PatientWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Patient upsert
   */
  export type PatientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * The filter to search for the Patient to update in case it exists.
     */
    where: PatientWhereUniqueInput
    /**
     * In case the Patient found by the `where` argument doesn't exist, create a new Patient with this data.
     */
    create: XOR<PatientCreateInput, PatientUncheckedCreateInput>
    /**
     * In case the Patient was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PatientUpdateInput, PatientUncheckedUpdateInput>
  }

  /**
   * Patient delete
   */
  export type PatientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
    /**
     * Filter which Patient to delete.
     */
    where: PatientWhereUniqueInput
  }

  /**
   * Patient deleteMany
   */
  export type PatientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Patients to delete
     */
    where?: PatientWhereInput
  }

  /**
   * Patient.orders
   */
  export type Patient$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Patient.area
   */
  export type Patient$areaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    where?: AreaWhereInput
  }

  /**
   * Patient.city
   */
  export type Patient$cityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the City
     */
    select?: CitySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CityInclude<ExtArgs> | null
    where?: CityWhereInput
  }

  /**
   * Patient.postForms
   */
  export type Patient$postFormsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostAdministrationForm
     */
    select?: PostAdministrationFormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostAdministrationFormInclude<ExtArgs> | null
    where?: PostAdministrationFormWhereInput
    orderBy?: PostAdministrationFormOrderByWithRelationInput | PostAdministrationFormOrderByWithRelationInput[]
    cursor?: PostAdministrationFormWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PostAdministrationFormScalarFieldEnum | PostAdministrationFormScalarFieldEnum[]
  }

  /**
   * Patient without action
   */
  export type PatientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Patient
     */
    select?: PatientSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PatientInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    patientId: string | null
    kamId: string | null
    distributorId: string | null
    cityId: string | null
    createdById: string | null
    status: $Enums.OrderStatus | null
    doctorName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    areaId: string | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    patientId: string | null
    kamId: string | null
    distributorId: string | null
    cityId: string | null
    createdById: string | null
    status: $Enums.OrderStatus | null
    doctorName: string | null
    createdAt: Date | null
    updatedAt: Date | null
    areaId: string | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    patientId: number
    kamId: number
    distributorId: number
    cityId: number
    createdById: number
    status: number
    doctorName: number
    createdAt: number
    updatedAt: number
    areaId: number
    _all: number
  }


  export type OrderMinAggregateInputType = {
    id?: true
    patientId?: true
    kamId?: true
    distributorId?: true
    cityId?: true
    createdById?: true
    status?: true
    doctorName?: true
    createdAt?: true
    updatedAt?: true
    areaId?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    patientId?: true
    kamId?: true
    distributorId?: true
    cityId?: true
    createdById?: true
    status?: true
    doctorName?: true
    createdAt?: true
    updatedAt?: true
    areaId?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    patientId?: true
    kamId?: true
    distributorId?: true
    cityId?: true
    createdById?: true
    status?: true
    doctorName?: true
    createdAt?: true
    updatedAt?: true
    areaId?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    patientId: string
    kamId: string | null
    distributorId: string | null
    cityId: string
    createdById: string
    status: $Enums.OrderStatus
    doctorName: string | null
    createdAt: Date
    updatedAt: Date
    areaId: string | null
    _count: OrderCountAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    kamId?: boolean
    distributorId?: boolean
    cityId?: boolean
    createdById?: boolean
    status?: boolean
    doctorName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    areaId?: boolean
    area?: boolean | Order$areaArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    distributor?: boolean | Order$distributorArgs<ExtArgs>
    kam?: boolean | Order$kamArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    postForm?: boolean | Order$postFormArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    kamId?: boolean
    distributorId?: boolean
    cityId?: boolean
    createdById?: boolean
    status?: boolean
    doctorName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    areaId?: boolean
    area?: boolean | Order$areaArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    distributor?: boolean | Order$distributorArgs<ExtArgs>
    kam?: boolean | Order$kamArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    patientId?: boolean
    kamId?: boolean
    distributorId?: boolean
    cityId?: boolean
    createdById?: boolean
    status?: boolean
    doctorName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    areaId?: boolean
    area?: boolean | Order$areaArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    distributor?: boolean | Order$distributorArgs<ExtArgs>
    kam?: boolean | Order$kamArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    patientId?: boolean
    kamId?: boolean
    distributorId?: boolean
    cityId?: boolean
    createdById?: boolean
    status?: boolean
    doctorName?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    areaId?: boolean
  }

  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | Order$areaArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    distributor?: boolean | Order$distributorArgs<ExtArgs>
    kam?: boolean | Order$kamArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
    postForm?: boolean | Order$postFormArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | Order$areaArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    distributor?: boolean | Order$distributorArgs<ExtArgs>
    kam?: boolean | Order$kamArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    area?: boolean | Order$areaArgs<ExtArgs>
    city?: boolean | CityDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    distributor?: boolean | Order$distributorArgs<ExtArgs>
    kam?: boolean | Order$kamArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      area: Prisma.$AreaPayload<ExtArgs> | null
      city: Prisma.$CityPayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
      distributor: Prisma.$DistributorPayload<ExtArgs> | null
      kam: Prisma.$UserPayload<ExtArgs> | null
      patient: Prisma.$PatientPayload<ExtArgs>
      postForm: Prisma.$PostAdministrationFormPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      patientId: string
      kamId: string | null
      distributorId: string | null
      cityId: string
      createdById: string
      status: $Enums.OrderStatus
      doctorName: string | null
      createdAt: Date
      updatedAt: Date
      areaId: string | null
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn">>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    area<T extends Order$areaArgs<ExtArgs> = {}>(args?: Subset<T, Order$areaArgs<ExtArgs>>): Prisma__AreaClient<$Result.GetResult<Prisma.$AreaPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    city<T extends CityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CityDefaultArgs<ExtArgs>>): Prisma__CityClient<$Result.GetResult<Prisma.$CityPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    distributor<T extends Order$distributorArgs<ExtArgs> = {}>(args?: Subset<T, Order$distributorArgs<ExtArgs>>): Prisma__DistributorClient<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    kam<T extends Order$kamArgs<ExtArgs> = {}>(args?: Subset<T, Order$kamArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    postForm<T extends Order$postFormArgs<ExtArgs> = {}>(args?: Subset<T, Order$postFormArgs<ExtArgs>>): Prisma__PostAdministrationFormClient<$Result.GetResult<Prisma.$PostAdministrationFormPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */ 
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly patientId: FieldRef<"Order", 'String'>
    readonly kamId: FieldRef<"Order", 'String'>
    readonly distributorId: FieldRef<"Order", 'String'>
    readonly cityId: FieldRef<"Order", 'String'>
    readonly createdById: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly doctorName: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
    readonly areaId: FieldRef<"Order", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
  }

  /**
   * Order.area
   */
  export type Order$areaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Area
     */
    select?: AreaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AreaInclude<ExtArgs> | null
    where?: AreaWhereInput
  }

  /**
   * Order.distributor
   */
  export type Order$distributorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Distributor
     */
    select?: DistributorSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DistributorInclude<ExtArgs> | null
    where?: DistributorWhereInput
  }

  /**
   * Order.kam
   */
  export type Order$kamArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Order.postForm
   */
  export type Order$postFormArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostAdministrationForm
     */
    select?: PostAdministrationFormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostAdministrationFormInclude<ExtArgs> | null
    where?: PostAdministrationFormWhereInput
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model PostAdministrationForm
   */

  export type AggregatePostAdministrationForm = {
    _count: PostAdministrationFormCountAggregateOutputType | null
    _avg: PostAdministrationFormAvgAggregateOutputType | null
    _sum: PostAdministrationFormSumAggregateOutputType | null
    _min: PostAdministrationFormMinAggregateOutputType | null
    _max: PostAdministrationFormMaxAggregateOutputType | null
  }

  export type PostAdministrationFormAvgAggregateOutputType = {
    numberOfDevices: number | null
  }

  export type PostAdministrationFormSumAggregateOutputType = {
    numberOfDevices: number | null
  }

  export type PostAdministrationFormMinAggregateOutputType = {
    id: string | null
    orderId: string | null
    patientId: string | null
    kamName: string | null
    kamEmployeeCode: string | null
    region: string | null
    city: string | null
    area: string | null
    referredBy: string | null
    referralCode: string | null
    referralTeam: string | null
    doctorName: string | null
    doctorCode: string | null
    serviceProvider: string | null
    patientName: string | null
    patientArea: string | null
    sensorInstalledBy: string | null
    visitDate: Date | null
    visitTime: string | null
    numberOfDevices: number | null
    patientEmail: string | null
    patientWhatsApp: string | null
    firstActivationDate: Date | null
    comments: string | null
    serialNumber: string | null
    reminder: boolean | null
    createdAt: Date | null
  }

  export type PostAdministrationFormMaxAggregateOutputType = {
    id: string | null
    orderId: string | null
    patientId: string | null
    kamName: string | null
    kamEmployeeCode: string | null
    region: string | null
    city: string | null
    area: string | null
    referredBy: string | null
    referralCode: string | null
    referralTeam: string | null
    doctorName: string | null
    doctorCode: string | null
    serviceProvider: string | null
    patientName: string | null
    patientArea: string | null
    sensorInstalledBy: string | null
    visitDate: Date | null
    visitTime: string | null
    numberOfDevices: number | null
    patientEmail: string | null
    patientWhatsApp: string | null
    firstActivationDate: Date | null
    comments: string | null
    serialNumber: string | null
    reminder: boolean | null
    createdAt: Date | null
  }

  export type PostAdministrationFormCountAggregateOutputType = {
    id: number
    orderId: number
    patientId: number
    kamName: number
    kamEmployeeCode: number
    region: number
    city: number
    area: number
    referredBy: number
    referralCode: number
    referralTeam: number
    doctorName: number
    doctorCode: number
    serviceProvider: number
    patientName: number
    patientArea: number
    sensorInstalledBy: number
    visitDate: number
    visitTime: number
    numberOfDevices: number
    patientEmail: number
    patientWhatsApp: number
    firstActivationDate: number
    comments: number
    serialNumber: number
    reminder: number
    createdAt: number
    _all: number
  }


  export type PostAdministrationFormAvgAggregateInputType = {
    numberOfDevices?: true
  }

  export type PostAdministrationFormSumAggregateInputType = {
    numberOfDevices?: true
  }

  export type PostAdministrationFormMinAggregateInputType = {
    id?: true
    orderId?: true
    patientId?: true
    kamName?: true
    kamEmployeeCode?: true
    region?: true
    city?: true
    area?: true
    referredBy?: true
    referralCode?: true
    referralTeam?: true
    doctorName?: true
    doctorCode?: true
    serviceProvider?: true
    patientName?: true
    patientArea?: true
    sensorInstalledBy?: true
    visitDate?: true
    visitTime?: true
    numberOfDevices?: true
    patientEmail?: true
    patientWhatsApp?: true
    firstActivationDate?: true
    comments?: true
    serialNumber?: true
    reminder?: true
    createdAt?: true
  }

  export type PostAdministrationFormMaxAggregateInputType = {
    id?: true
    orderId?: true
    patientId?: true
    kamName?: true
    kamEmployeeCode?: true
    region?: true
    city?: true
    area?: true
    referredBy?: true
    referralCode?: true
    referralTeam?: true
    doctorName?: true
    doctorCode?: true
    serviceProvider?: true
    patientName?: true
    patientArea?: true
    sensorInstalledBy?: true
    visitDate?: true
    visitTime?: true
    numberOfDevices?: true
    patientEmail?: true
    patientWhatsApp?: true
    firstActivationDate?: true
    comments?: true
    serialNumber?: true
    reminder?: true
    createdAt?: true
  }

  export type PostAdministrationFormCountAggregateInputType = {
    id?: true
    orderId?: true
    patientId?: true
    kamName?: true
    kamEmployeeCode?: true
    region?: true
    city?: true
    area?: true
    referredBy?: true
    referralCode?: true
    referralTeam?: true
    doctorName?: true
    doctorCode?: true
    serviceProvider?: true
    patientName?: true
    patientArea?: true
    sensorInstalledBy?: true
    visitDate?: true
    visitTime?: true
    numberOfDevices?: true
    patientEmail?: true
    patientWhatsApp?: true
    firstActivationDate?: true
    comments?: true
    serialNumber?: true
    reminder?: true
    createdAt?: true
    _all?: true
  }

  export type PostAdministrationFormAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostAdministrationForm to aggregate.
     */
    where?: PostAdministrationFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostAdministrationForms to fetch.
     */
    orderBy?: PostAdministrationFormOrderByWithRelationInput | PostAdministrationFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PostAdministrationFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostAdministrationForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostAdministrationForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PostAdministrationForms
    **/
    _count?: true | PostAdministrationFormCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PostAdministrationFormAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PostAdministrationFormSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PostAdministrationFormMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PostAdministrationFormMaxAggregateInputType
  }

  export type GetPostAdministrationFormAggregateType<T extends PostAdministrationFormAggregateArgs> = {
        [P in keyof T & keyof AggregatePostAdministrationForm]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePostAdministrationForm[P]>
      : GetScalarType<T[P], AggregatePostAdministrationForm[P]>
  }




  export type PostAdministrationFormGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PostAdministrationFormWhereInput
    orderBy?: PostAdministrationFormOrderByWithAggregationInput | PostAdministrationFormOrderByWithAggregationInput[]
    by: PostAdministrationFormScalarFieldEnum[] | PostAdministrationFormScalarFieldEnum
    having?: PostAdministrationFormScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PostAdministrationFormCountAggregateInputType | true
    _avg?: PostAdministrationFormAvgAggregateInputType
    _sum?: PostAdministrationFormSumAggregateInputType
    _min?: PostAdministrationFormMinAggregateInputType
    _max?: PostAdministrationFormMaxAggregateInputType
  }

  export type PostAdministrationFormGroupByOutputType = {
    id: string
    orderId: string
    patientId: string
    kamName: string
    kamEmployeeCode: string
    region: string | null
    city: string
    area: string
    referredBy: string | null
    referralCode: string | null
    referralTeam: string | null
    doctorName: string
    doctorCode: string
    serviceProvider: string
    patientName: string
    patientArea: string
    sensorInstalledBy: string
    visitDate: Date
    visitTime: string
    numberOfDevices: number
    patientEmail: string | null
    patientWhatsApp: string
    firstActivationDate: Date | null
    comments: string | null
    serialNumber: string | null
    reminder: boolean
    createdAt: Date
    _count: PostAdministrationFormCountAggregateOutputType | null
    _avg: PostAdministrationFormAvgAggregateOutputType | null
    _sum: PostAdministrationFormSumAggregateOutputType | null
    _min: PostAdministrationFormMinAggregateOutputType | null
    _max: PostAdministrationFormMaxAggregateOutputType | null
  }

  type GetPostAdministrationFormGroupByPayload<T extends PostAdministrationFormGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PostAdministrationFormGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PostAdministrationFormGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PostAdministrationFormGroupByOutputType[P]>
            : GetScalarType<T[P], PostAdministrationFormGroupByOutputType[P]>
        }
      >
    >


  export type PostAdministrationFormSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    patientId?: boolean
    kamName?: boolean
    kamEmployeeCode?: boolean
    region?: boolean
    city?: boolean
    area?: boolean
    referredBy?: boolean
    referralCode?: boolean
    referralTeam?: boolean
    doctorName?: boolean
    doctorCode?: boolean
    serviceProvider?: boolean
    patientName?: boolean
    patientArea?: boolean
    sensorInstalledBy?: boolean
    visitDate?: boolean
    visitTime?: boolean
    numberOfDevices?: boolean
    patientEmail?: boolean
    patientWhatsApp?: boolean
    firstActivationDate?: boolean
    comments?: boolean
    serialNumber?: boolean
    reminder?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postAdministrationForm"]>

  export type PostAdministrationFormSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    patientId?: boolean
    kamName?: boolean
    kamEmployeeCode?: boolean
    region?: boolean
    city?: boolean
    area?: boolean
    referredBy?: boolean
    referralCode?: boolean
    referralTeam?: boolean
    doctorName?: boolean
    doctorCode?: boolean
    serviceProvider?: boolean
    patientName?: boolean
    patientArea?: boolean
    sensorInstalledBy?: boolean
    visitDate?: boolean
    visitTime?: boolean
    numberOfDevices?: boolean
    patientEmail?: boolean
    patientWhatsApp?: boolean
    firstActivationDate?: boolean
    comments?: boolean
    serialNumber?: boolean
    reminder?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postAdministrationForm"]>

  export type PostAdministrationFormSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderId?: boolean
    patientId?: boolean
    kamName?: boolean
    kamEmployeeCode?: boolean
    region?: boolean
    city?: boolean
    area?: boolean
    referredBy?: boolean
    referralCode?: boolean
    referralTeam?: boolean
    doctorName?: boolean
    doctorCode?: boolean
    serviceProvider?: boolean
    patientName?: boolean
    patientArea?: boolean
    sensorInstalledBy?: boolean
    visitDate?: boolean
    visitTime?: boolean
    numberOfDevices?: boolean
    patientEmail?: boolean
    patientWhatsApp?: boolean
    firstActivationDate?: boolean
    comments?: boolean
    serialNumber?: boolean
    reminder?: boolean
    createdAt?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["postAdministrationForm"]>

  export type PostAdministrationFormSelectScalar = {
    id?: boolean
    orderId?: boolean
    patientId?: boolean
    kamName?: boolean
    kamEmployeeCode?: boolean
    region?: boolean
    city?: boolean
    area?: boolean
    referredBy?: boolean
    referralCode?: boolean
    referralTeam?: boolean
    doctorName?: boolean
    doctorCode?: boolean
    serviceProvider?: boolean
    patientName?: boolean
    patientArea?: boolean
    sensorInstalledBy?: boolean
    visitDate?: boolean
    visitTime?: boolean
    numberOfDevices?: boolean
    patientEmail?: boolean
    patientWhatsApp?: boolean
    firstActivationDate?: boolean
    comments?: boolean
    serialNumber?: boolean
    reminder?: boolean
    createdAt?: boolean
  }

  export type PostAdministrationFormInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type PostAdministrationFormIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }
  export type PostAdministrationFormIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    patient?: boolean | PatientDefaultArgs<ExtArgs>
  }

  export type $PostAdministrationFormPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PostAdministrationForm"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      patient: Prisma.$PatientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderId: string
      patientId: string
      kamName: string
      kamEmployeeCode: string
      region: string | null
      city: string
      area: string
      referredBy: string | null
      referralCode: string | null
      referralTeam: string | null
      doctorName: string
      doctorCode: string
      serviceProvider: string
      patientName: string
      patientArea: string
      sensorInstalledBy: string
      visitDate: Date
      visitTime: string
      numberOfDevices: number
      patientEmail: string | null
      patientWhatsApp: string
      firstActivationDate: Date | null
      comments: string | null
      serialNumber: string | null
      reminder: boolean
      createdAt: Date
    }, ExtArgs["result"]["postAdministrationForm"]>
    composites: {}
  }

  type PostAdministrationFormGetPayload<S extends boolean | null | undefined | PostAdministrationFormDefaultArgs> = $Result.GetResult<Prisma.$PostAdministrationFormPayload, S>

  type PostAdministrationFormCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PostAdministrationFormFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PostAdministrationFormCountAggregateInputType | true
    }

  export interface PostAdministrationFormDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PostAdministrationForm'], meta: { name: 'PostAdministrationForm' } }
    /**
     * Find zero or one PostAdministrationForm that matches the filter.
     * @param {PostAdministrationFormFindUniqueArgs} args - Arguments to find a PostAdministrationForm
     * @example
     * // Get one PostAdministrationForm
     * const postAdministrationForm = await prisma.postAdministrationForm.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PostAdministrationFormFindUniqueArgs>(args: SelectSubset<T, PostAdministrationFormFindUniqueArgs<ExtArgs>>): Prisma__PostAdministrationFormClient<$Result.GetResult<Prisma.$PostAdministrationFormPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one PostAdministrationForm that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PostAdministrationFormFindUniqueOrThrowArgs} args - Arguments to find a PostAdministrationForm
     * @example
     * // Get one PostAdministrationForm
     * const postAdministrationForm = await prisma.postAdministrationForm.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PostAdministrationFormFindUniqueOrThrowArgs>(args: SelectSubset<T, PostAdministrationFormFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PostAdministrationFormClient<$Result.GetResult<Prisma.$PostAdministrationFormPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first PostAdministrationForm that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAdministrationFormFindFirstArgs} args - Arguments to find a PostAdministrationForm
     * @example
     * // Get one PostAdministrationForm
     * const postAdministrationForm = await prisma.postAdministrationForm.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PostAdministrationFormFindFirstArgs>(args?: SelectSubset<T, PostAdministrationFormFindFirstArgs<ExtArgs>>): Prisma__PostAdministrationFormClient<$Result.GetResult<Prisma.$PostAdministrationFormPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first PostAdministrationForm that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAdministrationFormFindFirstOrThrowArgs} args - Arguments to find a PostAdministrationForm
     * @example
     * // Get one PostAdministrationForm
     * const postAdministrationForm = await prisma.postAdministrationForm.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PostAdministrationFormFindFirstOrThrowArgs>(args?: SelectSubset<T, PostAdministrationFormFindFirstOrThrowArgs<ExtArgs>>): Prisma__PostAdministrationFormClient<$Result.GetResult<Prisma.$PostAdministrationFormPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more PostAdministrationForms that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAdministrationFormFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PostAdministrationForms
     * const postAdministrationForms = await prisma.postAdministrationForm.findMany()
     * 
     * // Get first 10 PostAdministrationForms
     * const postAdministrationForms = await prisma.postAdministrationForm.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const postAdministrationFormWithIdOnly = await prisma.postAdministrationForm.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PostAdministrationFormFindManyArgs>(args?: SelectSubset<T, PostAdministrationFormFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostAdministrationFormPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a PostAdministrationForm.
     * @param {PostAdministrationFormCreateArgs} args - Arguments to create a PostAdministrationForm.
     * @example
     * // Create one PostAdministrationForm
     * const PostAdministrationForm = await prisma.postAdministrationForm.create({
     *   data: {
     *     // ... data to create a PostAdministrationForm
     *   }
     * })
     * 
     */
    create<T extends PostAdministrationFormCreateArgs>(args: SelectSubset<T, PostAdministrationFormCreateArgs<ExtArgs>>): Prisma__PostAdministrationFormClient<$Result.GetResult<Prisma.$PostAdministrationFormPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many PostAdministrationForms.
     * @param {PostAdministrationFormCreateManyArgs} args - Arguments to create many PostAdministrationForms.
     * @example
     * // Create many PostAdministrationForms
     * const postAdministrationForm = await prisma.postAdministrationForm.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PostAdministrationFormCreateManyArgs>(args?: SelectSubset<T, PostAdministrationFormCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PostAdministrationForms and returns the data saved in the database.
     * @param {PostAdministrationFormCreateManyAndReturnArgs} args - Arguments to create many PostAdministrationForms.
     * @example
     * // Create many PostAdministrationForms
     * const postAdministrationForm = await prisma.postAdministrationForm.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PostAdministrationForms and only return the `id`
     * const postAdministrationFormWithIdOnly = await prisma.postAdministrationForm.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PostAdministrationFormCreateManyAndReturnArgs>(args?: SelectSubset<T, PostAdministrationFormCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostAdministrationFormPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a PostAdministrationForm.
     * @param {PostAdministrationFormDeleteArgs} args - Arguments to delete one PostAdministrationForm.
     * @example
     * // Delete one PostAdministrationForm
     * const PostAdministrationForm = await prisma.postAdministrationForm.delete({
     *   where: {
     *     // ... filter to delete one PostAdministrationForm
     *   }
     * })
     * 
     */
    delete<T extends PostAdministrationFormDeleteArgs>(args: SelectSubset<T, PostAdministrationFormDeleteArgs<ExtArgs>>): Prisma__PostAdministrationFormClient<$Result.GetResult<Prisma.$PostAdministrationFormPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one PostAdministrationForm.
     * @param {PostAdministrationFormUpdateArgs} args - Arguments to update one PostAdministrationForm.
     * @example
     * // Update one PostAdministrationForm
     * const postAdministrationForm = await prisma.postAdministrationForm.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PostAdministrationFormUpdateArgs>(args: SelectSubset<T, PostAdministrationFormUpdateArgs<ExtArgs>>): Prisma__PostAdministrationFormClient<$Result.GetResult<Prisma.$PostAdministrationFormPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more PostAdministrationForms.
     * @param {PostAdministrationFormDeleteManyArgs} args - Arguments to filter PostAdministrationForms to delete.
     * @example
     * // Delete a few PostAdministrationForms
     * const { count } = await prisma.postAdministrationForm.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PostAdministrationFormDeleteManyArgs>(args?: SelectSubset<T, PostAdministrationFormDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostAdministrationForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAdministrationFormUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PostAdministrationForms
     * const postAdministrationForm = await prisma.postAdministrationForm.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PostAdministrationFormUpdateManyArgs>(args: SelectSubset<T, PostAdministrationFormUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PostAdministrationForms and returns the data updated in the database.
     * @param {PostAdministrationFormUpdateManyAndReturnArgs} args - Arguments to update many PostAdministrationForms.
     * @example
     * // Update many PostAdministrationForms
     * const postAdministrationForm = await prisma.postAdministrationForm.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PostAdministrationForms and only return the `id`
     * const postAdministrationFormWithIdOnly = await prisma.postAdministrationForm.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PostAdministrationFormUpdateManyAndReturnArgs>(args: SelectSubset<T, PostAdministrationFormUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PostAdministrationFormPayload<ExtArgs>, T, "updateManyAndReturn">>

    /**
     * Create or update one PostAdministrationForm.
     * @param {PostAdministrationFormUpsertArgs} args - Arguments to update or create a PostAdministrationForm.
     * @example
     * // Update or create a PostAdministrationForm
     * const postAdministrationForm = await prisma.postAdministrationForm.upsert({
     *   create: {
     *     // ... data to create a PostAdministrationForm
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PostAdministrationForm we want to update
     *   }
     * })
     */
    upsert<T extends PostAdministrationFormUpsertArgs>(args: SelectSubset<T, PostAdministrationFormUpsertArgs<ExtArgs>>): Prisma__PostAdministrationFormClient<$Result.GetResult<Prisma.$PostAdministrationFormPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of PostAdministrationForms.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAdministrationFormCountArgs} args - Arguments to filter PostAdministrationForms to count.
     * @example
     * // Count the number of PostAdministrationForms
     * const count = await prisma.postAdministrationForm.count({
     *   where: {
     *     // ... the filter for the PostAdministrationForms we want to count
     *   }
     * })
    **/
    count<T extends PostAdministrationFormCountArgs>(
      args?: Subset<T, PostAdministrationFormCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PostAdministrationFormCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PostAdministrationForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAdministrationFormAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PostAdministrationFormAggregateArgs>(args: Subset<T, PostAdministrationFormAggregateArgs>): Prisma.PrismaPromise<GetPostAdministrationFormAggregateType<T>>

    /**
     * Group by PostAdministrationForm.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PostAdministrationFormGroupByArgs} args - Group by arguments.
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
      T extends PostAdministrationFormGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PostAdministrationFormGroupByArgs['orderBy'] }
        : { orderBy?: PostAdministrationFormGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PostAdministrationFormGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPostAdministrationFormGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PostAdministrationForm model
   */
  readonly fields: PostAdministrationFormFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PostAdministrationForm.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PostAdministrationFormClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    patient<T extends PatientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PatientDefaultArgs<ExtArgs>>): Prisma__PatientClient<$Result.GetResult<Prisma.$PatientPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PostAdministrationForm model
   */ 
  interface PostAdministrationFormFieldRefs {
    readonly id: FieldRef<"PostAdministrationForm", 'String'>
    readonly orderId: FieldRef<"PostAdministrationForm", 'String'>
    readonly patientId: FieldRef<"PostAdministrationForm", 'String'>
    readonly kamName: FieldRef<"PostAdministrationForm", 'String'>
    readonly kamEmployeeCode: FieldRef<"PostAdministrationForm", 'String'>
    readonly region: FieldRef<"PostAdministrationForm", 'String'>
    readonly city: FieldRef<"PostAdministrationForm", 'String'>
    readonly area: FieldRef<"PostAdministrationForm", 'String'>
    readonly referredBy: FieldRef<"PostAdministrationForm", 'String'>
    readonly referralCode: FieldRef<"PostAdministrationForm", 'String'>
    readonly referralTeam: FieldRef<"PostAdministrationForm", 'String'>
    readonly doctorName: FieldRef<"PostAdministrationForm", 'String'>
    readonly doctorCode: FieldRef<"PostAdministrationForm", 'String'>
    readonly serviceProvider: FieldRef<"PostAdministrationForm", 'String'>
    readonly patientName: FieldRef<"PostAdministrationForm", 'String'>
    readonly patientArea: FieldRef<"PostAdministrationForm", 'String'>
    readonly sensorInstalledBy: FieldRef<"PostAdministrationForm", 'String'>
    readonly visitDate: FieldRef<"PostAdministrationForm", 'DateTime'>
    readonly visitTime: FieldRef<"PostAdministrationForm", 'String'>
    readonly numberOfDevices: FieldRef<"PostAdministrationForm", 'Int'>
    readonly patientEmail: FieldRef<"PostAdministrationForm", 'String'>
    readonly patientWhatsApp: FieldRef<"PostAdministrationForm", 'String'>
    readonly firstActivationDate: FieldRef<"PostAdministrationForm", 'DateTime'>
    readonly comments: FieldRef<"PostAdministrationForm", 'String'>
    readonly serialNumber: FieldRef<"PostAdministrationForm", 'String'>
    readonly reminder: FieldRef<"PostAdministrationForm", 'Boolean'>
    readonly createdAt: FieldRef<"PostAdministrationForm", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PostAdministrationForm findUnique
   */
  export type PostAdministrationFormFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostAdministrationForm
     */
    select?: PostAdministrationFormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostAdministrationFormInclude<ExtArgs> | null
    /**
     * Filter, which PostAdministrationForm to fetch.
     */
    where: PostAdministrationFormWhereUniqueInput
  }

  /**
   * PostAdministrationForm findUniqueOrThrow
   */
  export type PostAdministrationFormFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostAdministrationForm
     */
    select?: PostAdministrationFormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostAdministrationFormInclude<ExtArgs> | null
    /**
     * Filter, which PostAdministrationForm to fetch.
     */
    where: PostAdministrationFormWhereUniqueInput
  }

  /**
   * PostAdministrationForm findFirst
   */
  export type PostAdministrationFormFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostAdministrationForm
     */
    select?: PostAdministrationFormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostAdministrationFormInclude<ExtArgs> | null
    /**
     * Filter, which PostAdministrationForm to fetch.
     */
    where?: PostAdministrationFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostAdministrationForms to fetch.
     */
    orderBy?: PostAdministrationFormOrderByWithRelationInput | PostAdministrationFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostAdministrationForms.
     */
    cursor?: PostAdministrationFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostAdministrationForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostAdministrationForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostAdministrationForms.
     */
    distinct?: PostAdministrationFormScalarFieldEnum | PostAdministrationFormScalarFieldEnum[]
  }

  /**
   * PostAdministrationForm findFirstOrThrow
   */
  export type PostAdministrationFormFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostAdministrationForm
     */
    select?: PostAdministrationFormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostAdministrationFormInclude<ExtArgs> | null
    /**
     * Filter, which PostAdministrationForm to fetch.
     */
    where?: PostAdministrationFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostAdministrationForms to fetch.
     */
    orderBy?: PostAdministrationFormOrderByWithRelationInput | PostAdministrationFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PostAdministrationForms.
     */
    cursor?: PostAdministrationFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostAdministrationForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostAdministrationForms.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PostAdministrationForms.
     */
    distinct?: PostAdministrationFormScalarFieldEnum | PostAdministrationFormScalarFieldEnum[]
  }

  /**
   * PostAdministrationForm findMany
   */
  export type PostAdministrationFormFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostAdministrationForm
     */
    select?: PostAdministrationFormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostAdministrationFormInclude<ExtArgs> | null
    /**
     * Filter, which PostAdministrationForms to fetch.
     */
    where?: PostAdministrationFormWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PostAdministrationForms to fetch.
     */
    orderBy?: PostAdministrationFormOrderByWithRelationInput | PostAdministrationFormOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PostAdministrationForms.
     */
    cursor?: PostAdministrationFormWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PostAdministrationForms from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PostAdministrationForms.
     */
    skip?: number
    distinct?: PostAdministrationFormScalarFieldEnum | PostAdministrationFormScalarFieldEnum[]
  }

  /**
   * PostAdministrationForm create
   */
  export type PostAdministrationFormCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostAdministrationForm
     */
    select?: PostAdministrationFormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostAdministrationFormInclude<ExtArgs> | null
    /**
     * The data needed to create a PostAdministrationForm.
     */
    data: XOR<PostAdministrationFormCreateInput, PostAdministrationFormUncheckedCreateInput>
  }

  /**
   * PostAdministrationForm createMany
   */
  export type PostAdministrationFormCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PostAdministrationForms.
     */
    data: PostAdministrationFormCreateManyInput | PostAdministrationFormCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PostAdministrationForm createManyAndReturn
   */
  export type PostAdministrationFormCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostAdministrationForm
     */
    select?: PostAdministrationFormSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many PostAdministrationForms.
     */
    data: PostAdministrationFormCreateManyInput | PostAdministrationFormCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostAdministrationFormIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostAdministrationForm update
   */
  export type PostAdministrationFormUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostAdministrationForm
     */
    select?: PostAdministrationFormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostAdministrationFormInclude<ExtArgs> | null
    /**
     * The data needed to update a PostAdministrationForm.
     */
    data: XOR<PostAdministrationFormUpdateInput, PostAdministrationFormUncheckedUpdateInput>
    /**
     * Choose, which PostAdministrationForm to update.
     */
    where: PostAdministrationFormWhereUniqueInput
  }

  /**
   * PostAdministrationForm updateMany
   */
  export type PostAdministrationFormUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PostAdministrationForms.
     */
    data: XOR<PostAdministrationFormUpdateManyMutationInput, PostAdministrationFormUncheckedUpdateManyInput>
    /**
     * Filter which PostAdministrationForms to update
     */
    where?: PostAdministrationFormWhereInput
  }

  /**
   * PostAdministrationForm updateManyAndReturn
   */
  export type PostAdministrationFormUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostAdministrationForm
     */
    select?: PostAdministrationFormSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * The data used to update PostAdministrationForms.
     */
    data: XOR<PostAdministrationFormUpdateManyMutationInput, PostAdministrationFormUncheckedUpdateManyInput>
    /**
     * Filter which PostAdministrationForms to update
     */
    where?: PostAdministrationFormWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostAdministrationFormIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PostAdministrationForm upsert
   */
  export type PostAdministrationFormUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostAdministrationForm
     */
    select?: PostAdministrationFormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostAdministrationFormInclude<ExtArgs> | null
    /**
     * The filter to search for the PostAdministrationForm to update in case it exists.
     */
    where: PostAdministrationFormWhereUniqueInput
    /**
     * In case the PostAdministrationForm found by the `where` argument doesn't exist, create a new PostAdministrationForm with this data.
     */
    create: XOR<PostAdministrationFormCreateInput, PostAdministrationFormUncheckedCreateInput>
    /**
     * In case the PostAdministrationForm was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PostAdministrationFormUpdateInput, PostAdministrationFormUncheckedUpdateInput>
  }

  /**
   * PostAdministrationForm delete
   */
  export type PostAdministrationFormDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostAdministrationForm
     */
    select?: PostAdministrationFormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostAdministrationFormInclude<ExtArgs> | null
    /**
     * Filter which PostAdministrationForm to delete.
     */
    where: PostAdministrationFormWhereUniqueInput
  }

  /**
   * PostAdministrationForm deleteMany
   */
  export type PostAdministrationFormDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PostAdministrationForms to delete
     */
    where?: PostAdministrationFormWhereInput
  }

  /**
   * PostAdministrationForm without action
   */
  export type PostAdministrationFormDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PostAdministrationForm
     */
    select?: PostAdministrationFormSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PostAdministrationFormInclude<ExtArgs> | null
  }


  /**
   * Model Inventory
   */

  export type AggregateInventory = {
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  export type InventoryAvgAggregateOutputType = {
    totalStock: number | null
    allocatedStock: number | null
    availableStock: number | null
  }

  export type InventorySumAggregateOutputType = {
    totalStock: number | null
    allocatedStock: number | null
    availableStock: number | null
  }

  export type InventoryMinAggregateOutputType = {
    id: string | null
    distributorId: string | null
    totalStock: number | null
    allocatedStock: number | null
    availableStock: number | null
    lastUpdated: Date | null
  }

  export type InventoryMaxAggregateOutputType = {
    id: string | null
    distributorId: string | null
    totalStock: number | null
    allocatedStock: number | null
    availableStock: number | null
    lastUpdated: Date | null
  }

  export type InventoryCountAggregateOutputType = {
    id: number
    distributorId: number
    totalStock: number
    allocatedStock: number
    availableStock: number
    lastUpdated: number
    _all: number
  }


  export type InventoryAvgAggregateInputType = {
    totalStock?: true
    allocatedStock?: true
    availableStock?: true
  }

  export type InventorySumAggregateInputType = {
    totalStock?: true
    allocatedStock?: true
    availableStock?: true
  }

  export type InventoryMinAggregateInputType = {
    id?: true
    distributorId?: true
    totalStock?: true
    allocatedStock?: true
    availableStock?: true
    lastUpdated?: true
  }

  export type InventoryMaxAggregateInputType = {
    id?: true
    distributorId?: true
    totalStock?: true
    allocatedStock?: true
    availableStock?: true
    lastUpdated?: true
  }

  export type InventoryCountAggregateInputType = {
    id?: true
    distributorId?: true
    totalStock?: true
    allocatedStock?: true
    availableStock?: true
    lastUpdated?: true
    _all?: true
  }

  export type InventoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventory to aggregate.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Inventories
    **/
    _count?: true | InventoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: InventoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: InventorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: InventoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: InventoryMaxAggregateInputType
  }

  export type GetInventoryAggregateType<T extends InventoryAggregateArgs> = {
        [P in keyof T & keyof AggregateInventory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateInventory[P]>
      : GetScalarType<T[P], AggregateInventory[P]>
  }




  export type InventoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: InventoryWhereInput
    orderBy?: InventoryOrderByWithAggregationInput | InventoryOrderByWithAggregationInput[]
    by: InventoryScalarFieldEnum[] | InventoryScalarFieldEnum
    having?: InventoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: InventoryCountAggregateInputType | true
    _avg?: InventoryAvgAggregateInputType
    _sum?: InventorySumAggregateInputType
    _min?: InventoryMinAggregateInputType
    _max?: InventoryMaxAggregateInputType
  }

  export type InventoryGroupByOutputType = {
    id: string
    distributorId: string
    totalStock: number
    allocatedStock: number
    availableStock: number
    lastUpdated: Date
    _count: InventoryCountAggregateOutputType | null
    _avg: InventoryAvgAggregateOutputType | null
    _sum: InventorySumAggregateOutputType | null
    _min: InventoryMinAggregateOutputType | null
    _max: InventoryMaxAggregateOutputType | null
  }

  type GetInventoryGroupByPayload<T extends InventoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<InventoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof InventoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], InventoryGroupByOutputType[P]>
            : GetScalarType<T[P], InventoryGroupByOutputType[P]>
        }
      >
    >


  export type InventorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    distributorId?: boolean
    totalStock?: boolean
    allocatedStock?: boolean
    availableStock?: boolean
    lastUpdated?: boolean
    distributor?: boolean | DistributorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    distributorId?: boolean
    totalStock?: boolean
    allocatedStock?: boolean
    availableStock?: boolean
    lastUpdated?: boolean
    distributor?: boolean | DistributorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    distributorId?: boolean
    totalStock?: boolean
    allocatedStock?: boolean
    availableStock?: boolean
    lastUpdated?: boolean
    distributor?: boolean | DistributorDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["inventory"]>

  export type InventorySelectScalar = {
    id?: boolean
    distributorId?: boolean
    totalStock?: boolean
    allocatedStock?: boolean
    availableStock?: boolean
    lastUpdated?: boolean
  }

  export type InventoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    distributor?: boolean | DistributorDefaultArgs<ExtArgs>
  }
  export type InventoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    distributor?: boolean | DistributorDefaultArgs<ExtArgs>
  }
  export type InventoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    distributor?: boolean | DistributorDefaultArgs<ExtArgs>
  }

  export type $InventoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Inventory"
    objects: {
      distributor: Prisma.$DistributorPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      distributorId: string
      totalStock: number
      allocatedStock: number
      availableStock: number
      lastUpdated: Date
    }, ExtArgs["result"]["inventory"]>
    composites: {}
  }

  type InventoryGetPayload<S extends boolean | null | undefined | InventoryDefaultArgs> = $Result.GetResult<Prisma.$InventoryPayload, S>

  type InventoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<InventoryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: InventoryCountAggregateInputType | true
    }

  export interface InventoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Inventory'], meta: { name: 'Inventory' } }
    /**
     * Find zero or one Inventory that matches the filter.
     * @param {InventoryFindUniqueArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends InventoryFindUniqueArgs>(args: SelectSubset<T, InventoryFindUniqueArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Inventory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {InventoryFindUniqueOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends InventoryFindUniqueOrThrowArgs>(args: SelectSubset<T, InventoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Inventory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends InventoryFindFirstArgs>(args?: SelectSubset<T, InventoryFindFirstArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Inventory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindFirstOrThrowArgs} args - Arguments to find a Inventory
     * @example
     * // Get one Inventory
     * const inventory = await prisma.inventory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends InventoryFindFirstOrThrowArgs>(args?: SelectSubset<T, InventoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Inventories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Inventories
     * const inventories = await prisma.inventory.findMany()
     * 
     * // Get first 10 Inventories
     * const inventories = await prisma.inventory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const inventoryWithIdOnly = await prisma.inventory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends InventoryFindManyArgs>(args?: SelectSubset<T, InventoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Inventory.
     * @param {InventoryCreateArgs} args - Arguments to create a Inventory.
     * @example
     * // Create one Inventory
     * const Inventory = await prisma.inventory.create({
     *   data: {
     *     // ... data to create a Inventory
     *   }
     * })
     * 
     */
    create<T extends InventoryCreateArgs>(args: SelectSubset<T, InventoryCreateArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Inventories.
     * @param {InventoryCreateManyArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends InventoryCreateManyArgs>(args?: SelectSubset<T, InventoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Inventories and returns the data saved in the database.
     * @param {InventoryCreateManyAndReturnArgs} args - Arguments to create many Inventories.
     * @example
     * // Create many Inventories
     * const inventory = await prisma.inventory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Inventories and only return the `id`
     * const inventoryWithIdOnly = await prisma.inventory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends InventoryCreateManyAndReturnArgs>(args?: SelectSubset<T, InventoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Inventory.
     * @param {InventoryDeleteArgs} args - Arguments to delete one Inventory.
     * @example
     * // Delete one Inventory
     * const Inventory = await prisma.inventory.delete({
     *   where: {
     *     // ... filter to delete one Inventory
     *   }
     * })
     * 
     */
    delete<T extends InventoryDeleteArgs>(args: SelectSubset<T, InventoryDeleteArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Inventory.
     * @param {InventoryUpdateArgs} args - Arguments to update one Inventory.
     * @example
     * // Update one Inventory
     * const inventory = await prisma.inventory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends InventoryUpdateArgs>(args: SelectSubset<T, InventoryUpdateArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Inventories.
     * @param {InventoryDeleteManyArgs} args - Arguments to filter Inventories to delete.
     * @example
     * // Delete a few Inventories
     * const { count } = await prisma.inventory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends InventoryDeleteManyArgs>(args?: SelectSubset<T, InventoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends InventoryUpdateManyArgs>(args: SelectSubset<T, InventoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Inventories and returns the data updated in the database.
     * @param {InventoryUpdateManyAndReturnArgs} args - Arguments to update many Inventories.
     * @example
     * // Update many Inventories
     * const inventory = await prisma.inventory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Inventories and only return the `id`
     * const inventoryWithIdOnly = await prisma.inventory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends InventoryUpdateManyAndReturnArgs>(args: SelectSubset<T, InventoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "updateManyAndReturn">>

    /**
     * Create or update one Inventory.
     * @param {InventoryUpsertArgs} args - Arguments to update or create a Inventory.
     * @example
     * // Update or create a Inventory
     * const inventory = await prisma.inventory.upsert({
     *   create: {
     *     // ... data to create a Inventory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Inventory we want to update
     *   }
     * })
     */
    upsert<T extends InventoryUpsertArgs>(args: SelectSubset<T, InventoryUpsertArgs<ExtArgs>>): Prisma__InventoryClient<$Result.GetResult<Prisma.$InventoryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Inventories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryCountArgs} args - Arguments to filter Inventories to count.
     * @example
     * // Count the number of Inventories
     * const count = await prisma.inventory.count({
     *   where: {
     *     // ... the filter for the Inventories we want to count
     *   }
     * })
    **/
    count<T extends InventoryCountArgs>(
      args?: Subset<T, InventoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], InventoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends InventoryAggregateArgs>(args: Subset<T, InventoryAggregateArgs>): Prisma.PrismaPromise<GetInventoryAggregateType<T>>

    /**
     * Group by Inventory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {InventoryGroupByArgs} args - Group by arguments.
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
      T extends InventoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: InventoryGroupByArgs['orderBy'] }
        : { orderBy?: InventoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, InventoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetInventoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Inventory model
   */
  readonly fields: InventoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Inventory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__InventoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    distributor<T extends DistributorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DistributorDefaultArgs<ExtArgs>>): Prisma__DistributorClient<$Result.GetResult<Prisma.$DistributorPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Inventory model
   */ 
  interface InventoryFieldRefs {
    readonly id: FieldRef<"Inventory", 'String'>
    readonly distributorId: FieldRef<"Inventory", 'String'>
    readonly totalStock: FieldRef<"Inventory", 'Int'>
    readonly allocatedStock: FieldRef<"Inventory", 'Int'>
    readonly availableStock: FieldRef<"Inventory", 'Int'>
    readonly lastUpdated: FieldRef<"Inventory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Inventory findUnique
   */
  export type InventoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findUniqueOrThrow
   */
  export type InventoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory findFirst
   */
  export type InventoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory findFirstOrThrow
   */
  export type InventoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventory to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Inventories.
     */
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory findMany
   */
  export type InventoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter, which Inventories to fetch.
     */
    where?: InventoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Inventories to fetch.
     */
    orderBy?: InventoryOrderByWithRelationInput | InventoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Inventories.
     */
    cursor?: InventoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Inventories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Inventories.
     */
    skip?: number
    distinct?: InventoryScalarFieldEnum | InventoryScalarFieldEnum[]
  }

  /**
   * Inventory create
   */
  export type InventoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Inventory.
     */
    data: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
  }

  /**
   * Inventory createMany
   */
  export type InventoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Inventories.
     */
    data: InventoryCreateManyInput | InventoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Inventory createManyAndReturn
   */
  export type InventoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Inventories.
     */
    data: InventoryCreateManyInput | InventoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inventory update
   */
  export type InventoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Inventory.
     */
    data: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
    /**
     * Choose, which Inventory to update.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory updateMany
   */
  export type InventoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Inventories.
     */
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyInput>
    /**
     * Filter which Inventories to update
     */
    where?: InventoryWhereInput
  }

  /**
   * Inventory updateManyAndReturn
   */
  export type InventoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * The data used to update Inventories.
     */
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyInput>
    /**
     * Filter which Inventories to update
     */
    where?: InventoryWhereInput
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Inventory upsert
   */
  export type InventoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Inventory to update in case it exists.
     */
    where: InventoryWhereUniqueInput
    /**
     * In case the Inventory found by the `where` argument doesn't exist, create a new Inventory with this data.
     */
    create: XOR<InventoryCreateInput, InventoryUncheckedCreateInput>
    /**
     * In case the Inventory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<InventoryUpdateInput, InventoryUncheckedUpdateInput>
  }

  /**
   * Inventory delete
   */
  export type InventoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
    /**
     * Filter which Inventory to delete.
     */
    where: InventoryWhereUniqueInput
  }

  /**
   * Inventory deleteMany
   */
  export type InventoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Inventories to delete
     */
    where?: InventoryWhereInput
  }

  /**
   * Inventory without action
   */
  export type InventoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Inventory
     */
    select?: InventorySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: InventoryInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    employeeCode: 'employeeCode',
    phone: 'phone',
    cityId: 'cityId',
    areaId: 'areaId',
    distributorId: 'distributorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CityScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type CityScalarFieldEnum = (typeof CityScalarFieldEnum)[keyof typeof CityScalarFieldEnum]


  export const AreaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cityId: 'cityId'
  };

  export type AreaScalarFieldEnum = (typeof AreaScalarFieldEnum)[keyof typeof AreaScalarFieldEnum]


  export const DistributorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    cityId: 'cityId',
    areaId: 'areaId'
  };

  export type DistributorScalarFieldEnum = (typeof DistributorScalarFieldEnum)[keyof typeof DistributorScalarFieldEnum]


  export const PatientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    email: 'email',
    address: 'address',
    cityId: 'cityId',
    areaId: 'areaId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    patientId: 'patientId',
    kamId: 'kamId',
    distributorId: 'distributorId',
    cityId: 'cityId',
    createdById: 'createdById',
    status: 'status',
    doctorName: 'doctorName',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    areaId: 'areaId'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const PostAdministrationFormScalarFieldEnum: {
    id: 'id',
    orderId: 'orderId',
    patientId: 'patientId',
    kamName: 'kamName',
    kamEmployeeCode: 'kamEmployeeCode',
    region: 'region',
    city: 'city',
    area: 'area',
    referredBy: 'referredBy',
    referralCode: 'referralCode',
    referralTeam: 'referralTeam',
    doctorName: 'doctorName',
    doctorCode: 'doctorCode',
    serviceProvider: 'serviceProvider',
    patientName: 'patientName',
    patientArea: 'patientArea',
    sensorInstalledBy: 'sensorInstalledBy',
    visitDate: 'visitDate',
    visitTime: 'visitTime',
    numberOfDevices: 'numberOfDevices',
    patientEmail: 'patientEmail',
    patientWhatsApp: 'patientWhatsApp',
    firstActivationDate: 'firstActivationDate',
    comments: 'comments',
    serialNumber: 'serialNumber',
    reminder: 'reminder',
    createdAt: 'createdAt'
  };

  export type PostAdministrationFormScalarFieldEnum = (typeof PostAdministrationFormScalarFieldEnum)[keyof typeof PostAdministrationFormScalarFieldEnum]


  export const InventoryScalarFieldEnum: {
    id: 'id',
    distributorId: 'distributorId',
    totalStock: 'totalStock',
    allocatedStock: 'allocatedStock',
    availableStock: 'availableStock',
    lastUpdated: 'lastUpdated'
  };

  export type InventoryScalarFieldEnum = (typeof InventoryScalarFieldEnum)[keyof typeof InventoryScalarFieldEnum]


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
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    employeeCode?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    cityId?: StringNullableFilter<"User"> | string | null
    areaId?: StringNullableFilter<"User"> | string | null
    distributorId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdOrders?: OrderListRelationFilter
    ordersAsKam?: OrderListRelationFilter
    area?: XOR<AreaNullableScalarRelationFilter, AreaWhereInput> | null
    city?: XOR<CityNullableScalarRelationFilter, CityWhereInput> | null
    distributor?: XOR<DistributorNullableScalarRelationFilter, DistributorWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    employeeCode?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    cityId?: SortOrderInput | SortOrder
    areaId?: SortOrderInput | SortOrder
    distributorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    createdOrders?: OrderOrderByRelationAggregateInput
    ordersAsKam?: OrderOrderByRelationAggregateInput
    area?: AreaOrderByWithRelationInput
    city?: CityOrderByWithRelationInput
    distributor?: DistributorOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    employeeCode?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    phone?: StringNullableFilter<"User"> | string | null
    cityId?: StringNullableFilter<"User"> | string | null
    areaId?: StringNullableFilter<"User"> | string | null
    distributorId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    createdOrders?: OrderListRelationFilter
    ordersAsKam?: OrderListRelationFilter
    area?: XOR<AreaNullableScalarRelationFilter, AreaWhereInput> | null
    city?: XOR<CityNullableScalarRelationFilter, CityWhereInput> | null
    distributor?: XOR<DistributorNullableScalarRelationFilter, DistributorWhereInput> | null
  }, "id" | "email" | "employeeCode">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    employeeCode?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    cityId?: SortOrderInput | SortOrder
    areaId?: SortOrderInput | SortOrder
    distributorId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    employeeCode?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    cityId?: StringNullableWithAggregatesFilter<"User"> | string | null
    areaId?: StringNullableWithAggregatesFilter<"User"> | string | null
    distributorId?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CityWhereInput = {
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    id?: StringFilter<"City"> | string
    name?: StringFilter<"City"> | string
    areas?: AreaListRelationFilter
    distributors?: DistributorListRelationFilter
    orders?: OrderListRelationFilter
    patients?: PatientListRelationFilter
    users?: UserListRelationFilter
  }

  export type CityOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    areas?: AreaOrderByRelationAggregateInput
    distributors?: DistributorOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    patients?: PatientOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
  }

  export type CityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CityWhereInput | CityWhereInput[]
    OR?: CityWhereInput[]
    NOT?: CityWhereInput | CityWhereInput[]
    areas?: AreaListRelationFilter
    distributors?: DistributorListRelationFilter
    orders?: OrderListRelationFilter
    patients?: PatientListRelationFilter
    users?: UserListRelationFilter
  }, "id" | "name">

  export type CityOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: CityCountOrderByAggregateInput
    _max?: CityMaxOrderByAggregateInput
    _min?: CityMinOrderByAggregateInput
  }

  export type CityScalarWhereWithAggregatesInput = {
    AND?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    OR?: CityScalarWhereWithAggregatesInput[]
    NOT?: CityScalarWhereWithAggregatesInput | CityScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"City"> | string
    name?: StringWithAggregatesFilter<"City"> | string
  }

  export type AreaWhereInput = {
    AND?: AreaWhereInput | AreaWhereInput[]
    OR?: AreaWhereInput[]
    NOT?: AreaWhereInput | AreaWhereInput[]
    id?: StringFilter<"Area"> | string
    name?: StringFilter<"Area"> | string
    cityId?: StringFilter<"Area"> | string
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
    distributors?: DistributorListRelationFilter
    orders?: OrderListRelationFilter
    patients?: PatientListRelationFilter
    users?: UserListRelationFilter
  }

  export type AreaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cityId?: SortOrder
    city?: CityOrderByWithRelationInput
    distributors?: DistributorOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    patients?: PatientOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
  }

  export type AreaWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_cityId?: AreaNameCityIdCompoundUniqueInput
    AND?: AreaWhereInput | AreaWhereInput[]
    OR?: AreaWhereInput[]
    NOT?: AreaWhereInput | AreaWhereInput[]
    name?: StringFilter<"Area"> | string
    cityId?: StringFilter<"Area"> | string
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
    distributors?: DistributorListRelationFilter
    orders?: OrderListRelationFilter
    patients?: PatientListRelationFilter
    users?: UserListRelationFilter
  }, "id" | "name_cityId">

  export type AreaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cityId?: SortOrder
    _count?: AreaCountOrderByAggregateInput
    _max?: AreaMaxOrderByAggregateInput
    _min?: AreaMinOrderByAggregateInput
  }

  export type AreaScalarWhereWithAggregatesInput = {
    AND?: AreaScalarWhereWithAggregatesInput | AreaScalarWhereWithAggregatesInput[]
    OR?: AreaScalarWhereWithAggregatesInput[]
    NOT?: AreaScalarWhereWithAggregatesInput | AreaScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Area"> | string
    name?: StringWithAggregatesFilter<"Area"> | string
    cityId?: StringWithAggregatesFilter<"Area"> | string
  }

  export type DistributorWhereInput = {
    AND?: DistributorWhereInput | DistributorWhereInput[]
    OR?: DistributorWhereInput[]
    NOT?: DistributorWhereInput | DistributorWhereInput[]
    id?: StringFilter<"Distributor"> | string
    name?: StringFilter<"Distributor"> | string
    cityId?: StringFilter<"Distributor"> | string
    areaId?: StringFilter<"Distributor"> | string
    area?: XOR<AreaScalarRelationFilter, AreaWhereInput>
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
    inventory?: InventoryListRelationFilter
    orders?: OrderListRelationFilter
    users?: UserListRelationFilter
  }

  export type DistributorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    cityId?: SortOrder
    areaId?: SortOrder
    area?: AreaOrderByWithRelationInput
    city?: CityOrderByWithRelationInput
    inventory?: InventoryOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
  }

  export type DistributorWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name_areaId?: DistributorNameAreaIdCompoundUniqueInput
    AND?: DistributorWhereInput | DistributorWhereInput[]
    OR?: DistributorWhereInput[]
    NOT?: DistributorWhereInput | DistributorWhereInput[]
    name?: StringFilter<"Distributor"> | string
    cityId?: StringFilter<"Distributor"> | string
    areaId?: StringFilter<"Distributor"> | string
    area?: XOR<AreaScalarRelationFilter, AreaWhereInput>
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
    inventory?: InventoryListRelationFilter
    orders?: OrderListRelationFilter
    users?: UserListRelationFilter
  }, "id" | "name_areaId">

  export type DistributorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    cityId?: SortOrder
    areaId?: SortOrder
    _count?: DistributorCountOrderByAggregateInput
    _max?: DistributorMaxOrderByAggregateInput
    _min?: DistributorMinOrderByAggregateInput
  }

  export type DistributorScalarWhereWithAggregatesInput = {
    AND?: DistributorScalarWhereWithAggregatesInput | DistributorScalarWhereWithAggregatesInput[]
    OR?: DistributorScalarWhereWithAggregatesInput[]
    NOT?: DistributorScalarWhereWithAggregatesInput | DistributorScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Distributor"> | string
    name?: StringWithAggregatesFilter<"Distributor"> | string
    cityId?: StringWithAggregatesFilter<"Distributor"> | string
    areaId?: StringWithAggregatesFilter<"Distributor"> | string
  }

  export type PatientWhereInput = {
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    id?: StringFilter<"Patient"> | string
    name?: StringFilter<"Patient"> | string
    phone?: StringFilter<"Patient"> | string
    email?: StringNullableFilter<"Patient"> | string | null
    address?: StringNullableFilter<"Patient"> | string | null
    cityId?: StringNullableFilter<"Patient"> | string | null
    areaId?: StringNullableFilter<"Patient"> | string | null
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    orders?: OrderListRelationFilter
    area?: XOR<AreaNullableScalarRelationFilter, AreaWhereInput> | null
    city?: XOR<CityNullableScalarRelationFilter, CityWhereInput> | null
    postForms?: PostAdministrationFormListRelationFilter
  }

  export type PatientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    cityId?: SortOrderInput | SortOrder
    areaId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orders?: OrderOrderByRelationAggregateInput
    area?: AreaOrderByWithRelationInput
    city?: CityOrderByWithRelationInput
    postForms?: PostAdministrationFormOrderByRelationAggregateInput
  }

  export type PatientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    AND?: PatientWhereInput | PatientWhereInput[]
    OR?: PatientWhereInput[]
    NOT?: PatientWhereInput | PatientWhereInput[]
    name?: StringFilter<"Patient"> | string
    email?: StringNullableFilter<"Patient"> | string | null
    address?: StringNullableFilter<"Patient"> | string | null
    cityId?: StringNullableFilter<"Patient"> | string | null
    areaId?: StringNullableFilter<"Patient"> | string | null
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
    orders?: OrderListRelationFilter
    area?: XOR<AreaNullableScalarRelationFilter, AreaWhereInput> | null
    city?: XOR<CityNullableScalarRelationFilter, CityWhereInput> | null
    postForms?: PostAdministrationFormListRelationFilter
  }, "id" | "phone">

  export type PatientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    cityId?: SortOrderInput | SortOrder
    areaId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PatientCountOrderByAggregateInput
    _max?: PatientMaxOrderByAggregateInput
    _min?: PatientMinOrderByAggregateInput
  }

  export type PatientScalarWhereWithAggregatesInput = {
    AND?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    OR?: PatientScalarWhereWithAggregatesInput[]
    NOT?: PatientScalarWhereWithAggregatesInput | PatientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Patient"> | string
    name?: StringWithAggregatesFilter<"Patient"> | string
    phone?: StringWithAggregatesFilter<"Patient"> | string
    email?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    address?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    cityId?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    areaId?: StringNullableWithAggregatesFilter<"Patient"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Patient"> | Date | string
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    patientId?: StringFilter<"Order"> | string
    kamId?: StringNullableFilter<"Order"> | string | null
    distributorId?: StringNullableFilter<"Order"> | string | null
    cityId?: StringFilter<"Order"> | string
    createdById?: StringFilter<"Order"> | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    doctorName?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    areaId?: StringNullableFilter<"Order"> | string | null
    area?: XOR<AreaNullableScalarRelationFilter, AreaWhereInput> | null
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    distributor?: XOR<DistributorNullableScalarRelationFilter, DistributorWhereInput> | null
    kam?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    postForm?: XOR<PostAdministrationFormNullableScalarRelationFilter, PostAdministrationFormWhereInput> | null
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    patientId?: SortOrder
    kamId?: SortOrderInput | SortOrder
    distributorId?: SortOrderInput | SortOrder
    cityId?: SortOrder
    createdById?: SortOrder
    status?: SortOrder
    doctorName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    areaId?: SortOrderInput | SortOrder
    area?: AreaOrderByWithRelationInput
    city?: CityOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    distributor?: DistributorOrderByWithRelationInput
    kam?: UserOrderByWithRelationInput
    patient?: PatientOrderByWithRelationInput
    postForm?: PostAdministrationFormOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    patientId?: StringFilter<"Order"> | string
    kamId?: StringNullableFilter<"Order"> | string | null
    distributorId?: StringNullableFilter<"Order"> | string | null
    cityId?: StringFilter<"Order"> | string
    createdById?: StringFilter<"Order"> | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    doctorName?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    areaId?: StringNullableFilter<"Order"> | string | null
    area?: XOR<AreaNullableScalarRelationFilter, AreaWhereInput> | null
    city?: XOR<CityScalarRelationFilter, CityWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    distributor?: XOR<DistributorNullableScalarRelationFilter, DistributorWhereInput> | null
    kam?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
    postForm?: XOR<PostAdministrationFormNullableScalarRelationFilter, PostAdministrationFormWhereInput> | null
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    patientId?: SortOrder
    kamId?: SortOrderInput | SortOrder
    distributorId?: SortOrderInput | SortOrder
    cityId?: SortOrder
    createdById?: SortOrder
    status?: SortOrder
    doctorName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    areaId?: SortOrderInput | SortOrder
    _count?: OrderCountOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    patientId?: StringWithAggregatesFilter<"Order"> | string
    kamId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    distributorId?: StringNullableWithAggregatesFilter<"Order"> | string | null
    cityId?: StringWithAggregatesFilter<"Order"> | string
    createdById?: StringWithAggregatesFilter<"Order"> | string
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    doctorName?: StringNullableWithAggregatesFilter<"Order"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    areaId?: StringNullableWithAggregatesFilter<"Order"> | string | null
  }

  export type PostAdministrationFormWhereInput = {
    AND?: PostAdministrationFormWhereInput | PostAdministrationFormWhereInput[]
    OR?: PostAdministrationFormWhereInput[]
    NOT?: PostAdministrationFormWhereInput | PostAdministrationFormWhereInput[]
    id?: StringFilter<"PostAdministrationForm"> | string
    orderId?: StringFilter<"PostAdministrationForm"> | string
    patientId?: StringFilter<"PostAdministrationForm"> | string
    kamName?: StringFilter<"PostAdministrationForm"> | string
    kamEmployeeCode?: StringFilter<"PostAdministrationForm"> | string
    region?: StringNullableFilter<"PostAdministrationForm"> | string | null
    city?: StringFilter<"PostAdministrationForm"> | string
    area?: StringFilter<"PostAdministrationForm"> | string
    referredBy?: StringNullableFilter<"PostAdministrationForm"> | string | null
    referralCode?: StringNullableFilter<"PostAdministrationForm"> | string | null
    referralTeam?: StringNullableFilter<"PostAdministrationForm"> | string | null
    doctorName?: StringFilter<"PostAdministrationForm"> | string
    doctorCode?: StringFilter<"PostAdministrationForm"> | string
    serviceProvider?: StringFilter<"PostAdministrationForm"> | string
    patientName?: StringFilter<"PostAdministrationForm"> | string
    patientArea?: StringFilter<"PostAdministrationForm"> | string
    sensorInstalledBy?: StringFilter<"PostAdministrationForm"> | string
    visitDate?: DateTimeFilter<"PostAdministrationForm"> | Date | string
    visitTime?: StringFilter<"PostAdministrationForm"> | string
    numberOfDevices?: IntFilter<"PostAdministrationForm"> | number
    patientEmail?: StringNullableFilter<"PostAdministrationForm"> | string | null
    patientWhatsApp?: StringFilter<"PostAdministrationForm"> | string
    firstActivationDate?: DateTimeNullableFilter<"PostAdministrationForm"> | Date | string | null
    comments?: StringNullableFilter<"PostAdministrationForm"> | string | null
    serialNumber?: StringNullableFilter<"PostAdministrationForm"> | string | null
    reminder?: BoolFilter<"PostAdministrationForm"> | boolean
    createdAt?: DateTimeFilter<"PostAdministrationForm"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }

  export type PostAdministrationFormOrderByWithRelationInput = {
    id?: SortOrder
    orderId?: SortOrder
    patientId?: SortOrder
    kamName?: SortOrder
    kamEmployeeCode?: SortOrder
    region?: SortOrderInput | SortOrder
    city?: SortOrder
    area?: SortOrder
    referredBy?: SortOrderInput | SortOrder
    referralCode?: SortOrderInput | SortOrder
    referralTeam?: SortOrderInput | SortOrder
    doctorName?: SortOrder
    doctorCode?: SortOrder
    serviceProvider?: SortOrder
    patientName?: SortOrder
    patientArea?: SortOrder
    sensorInstalledBy?: SortOrder
    visitDate?: SortOrder
    visitTime?: SortOrder
    numberOfDevices?: SortOrder
    patientEmail?: SortOrderInput | SortOrder
    patientWhatsApp?: SortOrder
    firstActivationDate?: SortOrderInput | SortOrder
    comments?: SortOrderInput | SortOrder
    serialNumber?: SortOrderInput | SortOrder
    reminder?: SortOrder
    createdAt?: SortOrder
    order?: OrderOrderByWithRelationInput
    patient?: PatientOrderByWithRelationInput
  }

  export type PostAdministrationFormWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderId?: string
    AND?: PostAdministrationFormWhereInput | PostAdministrationFormWhereInput[]
    OR?: PostAdministrationFormWhereInput[]
    NOT?: PostAdministrationFormWhereInput | PostAdministrationFormWhereInput[]
    patientId?: StringFilter<"PostAdministrationForm"> | string
    kamName?: StringFilter<"PostAdministrationForm"> | string
    kamEmployeeCode?: StringFilter<"PostAdministrationForm"> | string
    region?: StringNullableFilter<"PostAdministrationForm"> | string | null
    city?: StringFilter<"PostAdministrationForm"> | string
    area?: StringFilter<"PostAdministrationForm"> | string
    referredBy?: StringNullableFilter<"PostAdministrationForm"> | string | null
    referralCode?: StringNullableFilter<"PostAdministrationForm"> | string | null
    referralTeam?: StringNullableFilter<"PostAdministrationForm"> | string | null
    doctorName?: StringFilter<"PostAdministrationForm"> | string
    doctorCode?: StringFilter<"PostAdministrationForm"> | string
    serviceProvider?: StringFilter<"PostAdministrationForm"> | string
    patientName?: StringFilter<"PostAdministrationForm"> | string
    patientArea?: StringFilter<"PostAdministrationForm"> | string
    sensorInstalledBy?: StringFilter<"PostAdministrationForm"> | string
    visitDate?: DateTimeFilter<"PostAdministrationForm"> | Date | string
    visitTime?: StringFilter<"PostAdministrationForm"> | string
    numberOfDevices?: IntFilter<"PostAdministrationForm"> | number
    patientEmail?: StringNullableFilter<"PostAdministrationForm"> | string | null
    patientWhatsApp?: StringFilter<"PostAdministrationForm"> | string
    firstActivationDate?: DateTimeNullableFilter<"PostAdministrationForm"> | Date | string | null
    comments?: StringNullableFilter<"PostAdministrationForm"> | string | null
    serialNumber?: StringNullableFilter<"PostAdministrationForm"> | string | null
    reminder?: BoolFilter<"PostAdministrationForm"> | boolean
    createdAt?: DateTimeFilter<"PostAdministrationForm"> | Date | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    patient?: XOR<PatientScalarRelationFilter, PatientWhereInput>
  }, "id" | "orderId">

  export type PostAdministrationFormOrderByWithAggregationInput = {
    id?: SortOrder
    orderId?: SortOrder
    patientId?: SortOrder
    kamName?: SortOrder
    kamEmployeeCode?: SortOrder
    region?: SortOrderInput | SortOrder
    city?: SortOrder
    area?: SortOrder
    referredBy?: SortOrderInput | SortOrder
    referralCode?: SortOrderInput | SortOrder
    referralTeam?: SortOrderInput | SortOrder
    doctorName?: SortOrder
    doctorCode?: SortOrder
    serviceProvider?: SortOrder
    patientName?: SortOrder
    patientArea?: SortOrder
    sensorInstalledBy?: SortOrder
    visitDate?: SortOrder
    visitTime?: SortOrder
    numberOfDevices?: SortOrder
    patientEmail?: SortOrderInput | SortOrder
    patientWhatsApp?: SortOrder
    firstActivationDate?: SortOrderInput | SortOrder
    comments?: SortOrderInput | SortOrder
    serialNumber?: SortOrderInput | SortOrder
    reminder?: SortOrder
    createdAt?: SortOrder
    _count?: PostAdministrationFormCountOrderByAggregateInput
    _avg?: PostAdministrationFormAvgOrderByAggregateInput
    _max?: PostAdministrationFormMaxOrderByAggregateInput
    _min?: PostAdministrationFormMinOrderByAggregateInput
    _sum?: PostAdministrationFormSumOrderByAggregateInput
  }

  export type PostAdministrationFormScalarWhereWithAggregatesInput = {
    AND?: PostAdministrationFormScalarWhereWithAggregatesInput | PostAdministrationFormScalarWhereWithAggregatesInput[]
    OR?: PostAdministrationFormScalarWhereWithAggregatesInput[]
    NOT?: PostAdministrationFormScalarWhereWithAggregatesInput | PostAdministrationFormScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PostAdministrationForm"> | string
    orderId?: StringWithAggregatesFilter<"PostAdministrationForm"> | string
    patientId?: StringWithAggregatesFilter<"PostAdministrationForm"> | string
    kamName?: StringWithAggregatesFilter<"PostAdministrationForm"> | string
    kamEmployeeCode?: StringWithAggregatesFilter<"PostAdministrationForm"> | string
    region?: StringNullableWithAggregatesFilter<"PostAdministrationForm"> | string | null
    city?: StringWithAggregatesFilter<"PostAdministrationForm"> | string
    area?: StringWithAggregatesFilter<"PostAdministrationForm"> | string
    referredBy?: StringNullableWithAggregatesFilter<"PostAdministrationForm"> | string | null
    referralCode?: StringNullableWithAggregatesFilter<"PostAdministrationForm"> | string | null
    referralTeam?: StringNullableWithAggregatesFilter<"PostAdministrationForm"> | string | null
    doctorName?: StringWithAggregatesFilter<"PostAdministrationForm"> | string
    doctorCode?: StringWithAggregatesFilter<"PostAdministrationForm"> | string
    serviceProvider?: StringWithAggregatesFilter<"PostAdministrationForm"> | string
    patientName?: StringWithAggregatesFilter<"PostAdministrationForm"> | string
    patientArea?: StringWithAggregatesFilter<"PostAdministrationForm"> | string
    sensorInstalledBy?: StringWithAggregatesFilter<"PostAdministrationForm"> | string
    visitDate?: DateTimeWithAggregatesFilter<"PostAdministrationForm"> | Date | string
    visitTime?: StringWithAggregatesFilter<"PostAdministrationForm"> | string
    numberOfDevices?: IntWithAggregatesFilter<"PostAdministrationForm"> | number
    patientEmail?: StringNullableWithAggregatesFilter<"PostAdministrationForm"> | string | null
    patientWhatsApp?: StringWithAggregatesFilter<"PostAdministrationForm"> | string
    firstActivationDate?: DateTimeNullableWithAggregatesFilter<"PostAdministrationForm"> | Date | string | null
    comments?: StringNullableWithAggregatesFilter<"PostAdministrationForm"> | string | null
    serialNumber?: StringNullableWithAggregatesFilter<"PostAdministrationForm"> | string | null
    reminder?: BoolWithAggregatesFilter<"PostAdministrationForm"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"PostAdministrationForm"> | Date | string
  }

  export type InventoryWhereInput = {
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    id?: StringFilter<"Inventory"> | string
    distributorId?: StringFilter<"Inventory"> | string
    totalStock?: IntFilter<"Inventory"> | number
    allocatedStock?: IntFilter<"Inventory"> | number
    availableStock?: IntFilter<"Inventory"> | number
    lastUpdated?: DateTimeFilter<"Inventory"> | Date | string
    distributor?: XOR<DistributorScalarRelationFilter, DistributorWhereInput>
  }

  export type InventoryOrderByWithRelationInput = {
    id?: SortOrder
    distributorId?: SortOrder
    totalStock?: SortOrder
    allocatedStock?: SortOrder
    availableStock?: SortOrder
    lastUpdated?: SortOrder
    distributor?: DistributorOrderByWithRelationInput
  }

  export type InventoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: InventoryWhereInput | InventoryWhereInput[]
    OR?: InventoryWhereInput[]
    NOT?: InventoryWhereInput | InventoryWhereInput[]
    distributorId?: StringFilter<"Inventory"> | string
    totalStock?: IntFilter<"Inventory"> | number
    allocatedStock?: IntFilter<"Inventory"> | number
    availableStock?: IntFilter<"Inventory"> | number
    lastUpdated?: DateTimeFilter<"Inventory"> | Date | string
    distributor?: XOR<DistributorScalarRelationFilter, DistributorWhereInput>
  }, "id">

  export type InventoryOrderByWithAggregationInput = {
    id?: SortOrder
    distributorId?: SortOrder
    totalStock?: SortOrder
    allocatedStock?: SortOrder
    availableStock?: SortOrder
    lastUpdated?: SortOrder
    _count?: InventoryCountOrderByAggregateInput
    _avg?: InventoryAvgOrderByAggregateInput
    _max?: InventoryMaxOrderByAggregateInput
    _min?: InventoryMinOrderByAggregateInput
    _sum?: InventorySumOrderByAggregateInput
  }

  export type InventoryScalarWhereWithAggregatesInput = {
    AND?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    OR?: InventoryScalarWhereWithAggregatesInput[]
    NOT?: InventoryScalarWhereWithAggregatesInput | InventoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Inventory"> | string
    distributorId?: StringWithAggregatesFilter<"Inventory"> | string
    totalStock?: IntWithAggregatesFilter<"Inventory"> | number
    allocatedStock?: IntWithAggregatesFilter<"Inventory"> | number
    availableStock?: IntWithAggregatesFilter<"Inventory"> | number
    lastUpdated?: DateTimeWithAggregatesFilter<"Inventory"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    employeeCode?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdOrders?: OrderCreateNestedManyWithoutCreatedByInput
    ordersAsKam?: OrderCreateNestedManyWithoutKamInput
    area?: AreaCreateNestedOneWithoutUsersInput
    city?: CityCreateNestedOneWithoutUsersInput
    distributor?: DistributorCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    employeeCode?: string | null
    phone?: string | null
    cityId?: string | null
    areaId?: string | null
    distributorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdOrders?: OrderUncheckedCreateNestedManyWithoutCreatedByInput
    ordersAsKam?: OrderUncheckedCreateNestedManyWithoutKamInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOrders?: OrderUpdateManyWithoutCreatedByNestedInput
    ordersAsKam?: OrderUpdateManyWithoutKamNestedInput
    area?: AreaUpdateOneWithoutUsersNestedInput
    city?: CityUpdateOneWithoutUsersNestedInput
    distributor?: DistributorUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    distributorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOrders?: OrderUncheckedUpdateManyWithoutCreatedByNestedInput
    ordersAsKam?: OrderUncheckedUpdateManyWithoutKamNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    employeeCode?: string | null
    phone?: string | null
    cityId?: string | null
    areaId?: string | null
    distributorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    distributorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CityCreateInput = {
    id?: string
    name: string
    areas?: AreaCreateNestedManyWithoutCityInput
    distributors?: DistributorCreateNestedManyWithoutCityInput
    orders?: OrderCreateNestedManyWithoutCityInput
    patients?: PatientCreateNestedManyWithoutCityInput
    users?: UserCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateInput = {
    id?: string
    name: string
    areas?: AreaUncheckedCreateNestedManyWithoutCityInput
    distributors?: DistributorUncheckedCreateNestedManyWithoutCityInput
    orders?: OrderUncheckedCreateNestedManyWithoutCityInput
    patients?: PatientUncheckedCreateNestedManyWithoutCityInput
    users?: UserUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    areas?: AreaUpdateManyWithoutCityNestedInput
    distributors?: DistributorUpdateManyWithoutCityNestedInput
    orders?: OrderUpdateManyWithoutCityNestedInput
    patients?: PatientUpdateManyWithoutCityNestedInput
    users?: UserUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    areas?: AreaUncheckedUpdateManyWithoutCityNestedInput
    distributors?: DistributorUncheckedUpdateManyWithoutCityNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCityNestedInput
    patients?: PatientUncheckedUpdateManyWithoutCityNestedInput
    users?: UserUncheckedUpdateManyWithoutCityNestedInput
  }

  export type CityCreateManyInput = {
    id?: string
    name: string
  }

  export type CityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AreaCreateInput = {
    id?: string
    name: string
    city: CityCreateNestedOneWithoutAreasInput
    distributors?: DistributorCreateNestedManyWithoutAreaInput
    orders?: OrderCreateNestedManyWithoutAreaInput
    patients?: PatientCreateNestedManyWithoutAreaInput
    users?: UserCreateNestedManyWithoutAreaInput
  }

  export type AreaUncheckedCreateInput = {
    id?: string
    name: string
    cityId: string
    distributors?: DistributorUncheckedCreateNestedManyWithoutAreaInput
    orders?: OrderUncheckedCreateNestedManyWithoutAreaInput
    patients?: PatientUncheckedCreateNestedManyWithoutAreaInput
    users?: UserUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: CityUpdateOneRequiredWithoutAreasNestedInput
    distributors?: DistributorUpdateManyWithoutAreaNestedInput
    orders?: OrderUpdateManyWithoutAreaNestedInput
    patients?: PatientUpdateManyWithoutAreaNestedInput
    users?: UserUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    distributors?: DistributorUncheckedUpdateManyWithoutAreaNestedInput
    orders?: OrderUncheckedUpdateManyWithoutAreaNestedInput
    patients?: PatientUncheckedUpdateManyWithoutAreaNestedInput
    users?: UserUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type AreaCreateManyInput = {
    id?: string
    name: string
    cityId: string
  }

  export type AreaUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AreaUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
  }

  export type DistributorCreateInput = {
    id?: string
    name: string
    area: AreaCreateNestedOneWithoutDistributorsInput
    city: CityCreateNestedOneWithoutDistributorsInput
    inventory?: InventoryCreateNestedManyWithoutDistributorInput
    orders?: OrderCreateNestedManyWithoutDistributorInput
    users?: UserCreateNestedManyWithoutDistributorInput
  }

  export type DistributorUncheckedCreateInput = {
    id?: string
    name: string
    cityId: string
    areaId: string
    inventory?: InventoryUncheckedCreateNestedManyWithoutDistributorInput
    orders?: OrderUncheckedCreateNestedManyWithoutDistributorInput
    users?: UserUncheckedCreateNestedManyWithoutDistributorInput
  }

  export type DistributorUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    area?: AreaUpdateOneRequiredWithoutDistributorsNestedInput
    city?: CityUpdateOneRequiredWithoutDistributorsNestedInput
    inventory?: InventoryUpdateManyWithoutDistributorNestedInput
    orders?: OrderUpdateManyWithoutDistributorNestedInput
    users?: UserUpdateManyWithoutDistributorNestedInput
  }

  export type DistributorUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    areaId?: StringFieldUpdateOperationsInput | string
    inventory?: InventoryUncheckedUpdateManyWithoutDistributorNestedInput
    orders?: OrderUncheckedUpdateManyWithoutDistributorNestedInput
    users?: UserUncheckedUpdateManyWithoutDistributorNestedInput
  }

  export type DistributorCreateManyInput = {
    id?: string
    name: string
    cityId: string
    areaId: string
  }

  export type DistributorUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DistributorUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    areaId?: StringFieldUpdateOperationsInput | string
  }

  export type PatientCreateInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutPatientInput
    area?: AreaCreateNestedOneWithoutPatientsInput
    city?: CityCreateNestedOneWithoutPatientsInput
    postForms?: PostAdministrationFormCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    address?: string | null
    cityId?: string | null
    areaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutPatientInput
    postForms?: PostAdministrationFormUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutPatientNestedInput
    area?: AreaUpdateOneWithoutPatientsNestedInput
    city?: CityUpdateOneWithoutPatientsNestedInput
    postForms?: PostAdministrationFormUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutPatientNestedInput
    postForms?: PostAdministrationFormUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientCreateManyInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    address?: string | null
    cityId?: string | null
    areaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateInput = {
    id?: string
    status?: $Enums.OrderStatus
    doctorName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    area?: AreaCreateNestedOneWithoutOrdersInput
    city: CityCreateNestedOneWithoutOrdersInput
    createdBy: UserCreateNestedOneWithoutCreatedOrdersInput
    distributor?: DistributorCreateNestedOneWithoutOrdersInput
    kam?: UserCreateNestedOneWithoutOrdersAsKamInput
    patient: PatientCreateNestedOneWithoutOrdersInput
    postForm?: PostAdministrationFormCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    patientId: string
    kamId?: string | null
    distributorId?: string | null
    cityId: string
    createdById: string
    status?: $Enums.OrderStatus
    doctorName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    areaId?: string | null
    postForm?: PostAdministrationFormUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    area?: AreaUpdateOneWithoutOrdersNestedInput
    city?: CityUpdateOneRequiredWithoutOrdersNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedOrdersNestedInput
    distributor?: DistributorUpdateOneWithoutOrdersNestedInput
    kam?: UserUpdateOneWithoutOrdersAsKamNestedInput
    patient?: PatientUpdateOneRequiredWithoutOrdersNestedInput
    postForm?: PostAdministrationFormUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    kamId?: NullableStringFieldUpdateOperationsInput | string | null
    distributorId?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    postForm?: PostAdministrationFormUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    patientId: string
    kamId?: string | null
    distributorId?: string | null
    cityId: string
    createdById: string
    status?: $Enums.OrderStatus
    doctorName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    areaId?: string | null
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    kamId?: NullableStringFieldUpdateOperationsInput | string | null
    distributorId?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostAdministrationFormCreateInput = {
    id?: string
    kamName: string
    kamEmployeeCode: string
    region?: string | null
    city: string
    area: string
    referredBy?: string | null
    referralCode?: string | null
    referralTeam?: string | null
    doctorName: string
    doctorCode: string
    serviceProvider: string
    patientName: string
    patientArea: string
    sensorInstalledBy: string
    visitDate: Date | string
    visitTime: string
    numberOfDevices: number
    patientEmail?: string | null
    patientWhatsApp: string
    firstActivationDate?: Date | string | null
    comments?: string | null
    serialNumber?: string | null
    reminder?: boolean
    createdAt?: Date | string
    order: OrderCreateNestedOneWithoutPostFormInput
    patient: PatientCreateNestedOneWithoutPostFormsInput
  }

  export type PostAdministrationFormUncheckedCreateInput = {
    id?: string
    orderId: string
    patientId: string
    kamName: string
    kamEmployeeCode: string
    region?: string | null
    city: string
    area: string
    referredBy?: string | null
    referralCode?: string | null
    referralTeam?: string | null
    doctorName: string
    doctorCode: string
    serviceProvider: string
    patientName: string
    patientArea: string
    sensorInstalledBy: string
    visitDate: Date | string
    visitTime: string
    numberOfDevices: number
    patientEmail?: string | null
    patientWhatsApp: string
    firstActivationDate?: Date | string | null
    comments?: string | null
    serialNumber?: string | null
    reminder?: boolean
    createdAt?: Date | string
  }

  export type PostAdministrationFormUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    kamName?: StringFieldUpdateOperationsInput | string
    kamEmployeeCode?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referralTeam?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: StringFieldUpdateOperationsInput | string
    doctorCode?: StringFieldUpdateOperationsInput | string
    serviceProvider?: StringFieldUpdateOperationsInput | string
    patientName?: StringFieldUpdateOperationsInput | string
    patientArea?: StringFieldUpdateOperationsInput | string
    sensorInstalledBy?: StringFieldUpdateOperationsInput | string
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitTime?: StringFieldUpdateOperationsInput | string
    numberOfDevices?: IntFieldUpdateOperationsInput | number
    patientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    patientWhatsApp?: StringFieldUpdateOperationsInput | string
    firstActivationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    reminder?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutPostFormNestedInput
    patient?: PatientUpdateOneRequiredWithoutPostFormsNestedInput
  }

  export type PostAdministrationFormUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    kamName?: StringFieldUpdateOperationsInput | string
    kamEmployeeCode?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referralTeam?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: StringFieldUpdateOperationsInput | string
    doctorCode?: StringFieldUpdateOperationsInput | string
    serviceProvider?: StringFieldUpdateOperationsInput | string
    patientName?: StringFieldUpdateOperationsInput | string
    patientArea?: StringFieldUpdateOperationsInput | string
    sensorInstalledBy?: StringFieldUpdateOperationsInput | string
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitTime?: StringFieldUpdateOperationsInput | string
    numberOfDevices?: IntFieldUpdateOperationsInput | number
    patientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    patientWhatsApp?: StringFieldUpdateOperationsInput | string
    firstActivationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    reminder?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostAdministrationFormCreateManyInput = {
    id?: string
    orderId: string
    patientId: string
    kamName: string
    kamEmployeeCode: string
    region?: string | null
    city: string
    area: string
    referredBy?: string | null
    referralCode?: string | null
    referralTeam?: string | null
    doctorName: string
    doctorCode: string
    serviceProvider: string
    patientName: string
    patientArea: string
    sensorInstalledBy: string
    visitDate: Date | string
    visitTime: string
    numberOfDevices: number
    patientEmail?: string | null
    patientWhatsApp: string
    firstActivationDate?: Date | string | null
    comments?: string | null
    serialNumber?: string | null
    reminder?: boolean
    createdAt?: Date | string
  }

  export type PostAdministrationFormUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    kamName?: StringFieldUpdateOperationsInput | string
    kamEmployeeCode?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referralTeam?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: StringFieldUpdateOperationsInput | string
    doctorCode?: StringFieldUpdateOperationsInput | string
    serviceProvider?: StringFieldUpdateOperationsInput | string
    patientName?: StringFieldUpdateOperationsInput | string
    patientArea?: StringFieldUpdateOperationsInput | string
    sensorInstalledBy?: StringFieldUpdateOperationsInput | string
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitTime?: StringFieldUpdateOperationsInput | string
    numberOfDevices?: IntFieldUpdateOperationsInput | number
    patientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    patientWhatsApp?: StringFieldUpdateOperationsInput | string
    firstActivationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    reminder?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostAdministrationFormUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    kamName?: StringFieldUpdateOperationsInput | string
    kamEmployeeCode?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referralTeam?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: StringFieldUpdateOperationsInput | string
    doctorCode?: StringFieldUpdateOperationsInput | string
    serviceProvider?: StringFieldUpdateOperationsInput | string
    patientName?: StringFieldUpdateOperationsInput | string
    patientArea?: StringFieldUpdateOperationsInput | string
    sensorInstalledBy?: StringFieldUpdateOperationsInput | string
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitTime?: StringFieldUpdateOperationsInput | string
    numberOfDevices?: IntFieldUpdateOperationsInput | number
    patientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    patientWhatsApp?: StringFieldUpdateOperationsInput | string
    firstActivationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    reminder?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCreateInput = {
    id?: string
    totalStock?: number
    allocatedStock?: number
    availableStock?: number
    lastUpdated?: Date | string
    distributor: DistributorCreateNestedOneWithoutInventoryInput
  }

  export type InventoryUncheckedCreateInput = {
    id?: string
    distributorId: string
    totalStock?: number
    allocatedStock?: number
    availableStock?: number
    lastUpdated?: Date | string
  }

  export type InventoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalStock?: IntFieldUpdateOperationsInput | number
    allocatedStock?: IntFieldUpdateOperationsInput | number
    availableStock?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
    distributor?: DistributorUpdateOneRequiredWithoutInventoryNestedInput
  }

  export type InventoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    distributorId?: StringFieldUpdateOperationsInput | string
    totalStock?: IntFieldUpdateOperationsInput | number
    allocatedStock?: IntFieldUpdateOperationsInput | number
    availableStock?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCreateManyInput = {
    id?: string
    distributorId: string
    totalStock?: number
    allocatedStock?: number
    availableStock?: number
    lastUpdated?: Date | string
  }

  export type InventoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalStock?: IntFieldUpdateOperationsInput | number
    allocatedStock?: IntFieldUpdateOperationsInput | number
    availableStock?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    distributorId?: StringFieldUpdateOperationsInput | string
    totalStock?: IntFieldUpdateOperationsInput | number
    allocatedStock?: IntFieldUpdateOperationsInput | number
    availableStock?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type AreaNullableScalarRelationFilter = {
    is?: AreaWhereInput | null
    isNot?: AreaWhereInput | null
  }

  export type CityNullableScalarRelationFilter = {
    is?: CityWhereInput | null
    isNot?: CityWhereInput | null
  }

  export type DistributorNullableScalarRelationFilter = {
    is?: DistributorWhereInput | null
    isNot?: DistributorWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    employeeCode?: SortOrder
    phone?: SortOrder
    cityId?: SortOrder
    areaId?: SortOrder
    distributorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    employeeCode?: SortOrder
    phone?: SortOrder
    cityId?: SortOrder
    areaId?: SortOrder
    distributorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    employeeCode?: SortOrder
    phone?: SortOrder
    cityId?: SortOrder
    areaId?: SortOrder
    distributorId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type AreaListRelationFilter = {
    every?: AreaWhereInput
    some?: AreaWhereInput
    none?: AreaWhereInput
  }

  export type DistributorListRelationFilter = {
    every?: DistributorWhereInput
    some?: DistributorWhereInput
    none?: DistributorWhereInput
  }

  export type PatientListRelationFilter = {
    every?: PatientWhereInput
    some?: PatientWhereInput
    none?: PatientWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type AreaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DistributorOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CityCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CityMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CityMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type CityScalarRelationFilter = {
    is?: CityWhereInput
    isNot?: CityWhereInput
  }

  export type AreaNameCityIdCompoundUniqueInput = {
    name: string
    cityId: string
  }

  export type AreaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cityId?: SortOrder
  }

  export type AreaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cityId?: SortOrder
  }

  export type AreaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cityId?: SortOrder
  }

  export type AreaScalarRelationFilter = {
    is?: AreaWhereInput
    isNot?: AreaWhereInput
  }

  export type InventoryListRelationFilter = {
    every?: InventoryWhereInput
    some?: InventoryWhereInput
    none?: InventoryWhereInput
  }

  export type InventoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DistributorNameAreaIdCompoundUniqueInput = {
    name: string
    areaId: string
  }

  export type DistributorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cityId?: SortOrder
    areaId?: SortOrder
  }

  export type DistributorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cityId?: SortOrder
    areaId?: SortOrder
  }

  export type DistributorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    cityId?: SortOrder
    areaId?: SortOrder
  }

  export type PostAdministrationFormListRelationFilter = {
    every?: PostAdministrationFormWhereInput
    some?: PostAdministrationFormWhereInput
    none?: PostAdministrationFormWhereInput
  }

  export type PostAdministrationFormOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PatientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    cityId?: SortOrder
    areaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    cityId?: SortOrder
    areaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PatientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    email?: SortOrder
    address?: SortOrder
    cityId?: SortOrder
    areaId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type PatientScalarRelationFilter = {
    is?: PatientWhereInput
    isNot?: PatientWhereInput
  }

  export type PostAdministrationFormNullableScalarRelationFilter = {
    is?: PostAdministrationFormWhereInput | null
    isNot?: PostAdministrationFormWhereInput | null
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    kamId?: SortOrder
    distributorId?: SortOrder
    cityId?: SortOrder
    createdById?: SortOrder
    status?: SortOrder
    doctorName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    areaId?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    kamId?: SortOrder
    distributorId?: SortOrder
    cityId?: SortOrder
    createdById?: SortOrder
    status?: SortOrder
    doctorName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    areaId?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    patientId?: SortOrder
    kamId?: SortOrder
    distributorId?: SortOrder
    cityId?: SortOrder
    createdById?: SortOrder
    status?: SortOrder
    doctorName?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    areaId?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type PostAdministrationFormCountOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    patientId?: SortOrder
    kamName?: SortOrder
    kamEmployeeCode?: SortOrder
    region?: SortOrder
    city?: SortOrder
    area?: SortOrder
    referredBy?: SortOrder
    referralCode?: SortOrder
    referralTeam?: SortOrder
    doctorName?: SortOrder
    doctorCode?: SortOrder
    serviceProvider?: SortOrder
    patientName?: SortOrder
    patientArea?: SortOrder
    sensorInstalledBy?: SortOrder
    visitDate?: SortOrder
    visitTime?: SortOrder
    numberOfDevices?: SortOrder
    patientEmail?: SortOrder
    patientWhatsApp?: SortOrder
    firstActivationDate?: SortOrder
    comments?: SortOrder
    serialNumber?: SortOrder
    reminder?: SortOrder
    createdAt?: SortOrder
  }

  export type PostAdministrationFormAvgOrderByAggregateInput = {
    numberOfDevices?: SortOrder
  }

  export type PostAdministrationFormMaxOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    patientId?: SortOrder
    kamName?: SortOrder
    kamEmployeeCode?: SortOrder
    region?: SortOrder
    city?: SortOrder
    area?: SortOrder
    referredBy?: SortOrder
    referralCode?: SortOrder
    referralTeam?: SortOrder
    doctorName?: SortOrder
    doctorCode?: SortOrder
    serviceProvider?: SortOrder
    patientName?: SortOrder
    patientArea?: SortOrder
    sensorInstalledBy?: SortOrder
    visitDate?: SortOrder
    visitTime?: SortOrder
    numberOfDevices?: SortOrder
    patientEmail?: SortOrder
    patientWhatsApp?: SortOrder
    firstActivationDate?: SortOrder
    comments?: SortOrder
    serialNumber?: SortOrder
    reminder?: SortOrder
    createdAt?: SortOrder
  }

  export type PostAdministrationFormMinOrderByAggregateInput = {
    id?: SortOrder
    orderId?: SortOrder
    patientId?: SortOrder
    kamName?: SortOrder
    kamEmployeeCode?: SortOrder
    region?: SortOrder
    city?: SortOrder
    area?: SortOrder
    referredBy?: SortOrder
    referralCode?: SortOrder
    referralTeam?: SortOrder
    doctorName?: SortOrder
    doctorCode?: SortOrder
    serviceProvider?: SortOrder
    patientName?: SortOrder
    patientArea?: SortOrder
    sensorInstalledBy?: SortOrder
    visitDate?: SortOrder
    visitTime?: SortOrder
    numberOfDevices?: SortOrder
    patientEmail?: SortOrder
    patientWhatsApp?: SortOrder
    firstActivationDate?: SortOrder
    comments?: SortOrder
    serialNumber?: SortOrder
    reminder?: SortOrder
    createdAt?: SortOrder
  }

  export type PostAdministrationFormSumOrderByAggregateInput = {
    numberOfDevices?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DistributorScalarRelationFilter = {
    is?: DistributorWhereInput
    isNot?: DistributorWhereInput
  }

  export type InventoryCountOrderByAggregateInput = {
    id?: SortOrder
    distributorId?: SortOrder
    totalStock?: SortOrder
    allocatedStock?: SortOrder
    availableStock?: SortOrder
    lastUpdated?: SortOrder
  }

  export type InventoryAvgOrderByAggregateInput = {
    totalStock?: SortOrder
    allocatedStock?: SortOrder
    availableStock?: SortOrder
  }

  export type InventoryMaxOrderByAggregateInput = {
    id?: SortOrder
    distributorId?: SortOrder
    totalStock?: SortOrder
    allocatedStock?: SortOrder
    availableStock?: SortOrder
    lastUpdated?: SortOrder
  }

  export type InventoryMinOrderByAggregateInput = {
    id?: SortOrder
    distributorId?: SortOrder
    totalStock?: SortOrder
    allocatedStock?: SortOrder
    availableStock?: SortOrder
    lastUpdated?: SortOrder
  }

  export type InventorySumOrderByAggregateInput = {
    totalStock?: SortOrder
    allocatedStock?: SortOrder
    availableStock?: SortOrder
  }

  export type OrderCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<OrderCreateWithoutCreatedByInput, OrderUncheckedCreateWithoutCreatedByInput> | OrderCreateWithoutCreatedByInput[] | OrderUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCreatedByInput | OrderCreateOrConnectWithoutCreatedByInput[]
    createMany?: OrderCreateManyCreatedByInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutKamInput = {
    create?: XOR<OrderCreateWithoutKamInput, OrderUncheckedCreateWithoutKamInput> | OrderCreateWithoutKamInput[] | OrderUncheckedCreateWithoutKamInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutKamInput | OrderCreateOrConnectWithoutKamInput[]
    createMany?: OrderCreateManyKamInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type AreaCreateNestedOneWithoutUsersInput = {
    create?: XOR<AreaCreateWithoutUsersInput, AreaUncheckedCreateWithoutUsersInput>
    connectOrCreate?: AreaCreateOrConnectWithoutUsersInput
    connect?: AreaWhereUniqueInput
  }

  export type CityCreateNestedOneWithoutUsersInput = {
    create?: XOR<CityCreateWithoutUsersInput, CityUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CityCreateOrConnectWithoutUsersInput
    connect?: CityWhereUniqueInput
  }

  export type DistributorCreateNestedOneWithoutUsersInput = {
    create?: XOR<DistributorCreateWithoutUsersInput, DistributorUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DistributorCreateOrConnectWithoutUsersInput
    connect?: DistributorWhereUniqueInput
  }

  export type OrderUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<OrderCreateWithoutCreatedByInput, OrderUncheckedCreateWithoutCreatedByInput> | OrderCreateWithoutCreatedByInput[] | OrderUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCreatedByInput | OrderCreateOrConnectWithoutCreatedByInput[]
    createMany?: OrderCreateManyCreatedByInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutKamInput = {
    create?: XOR<OrderCreateWithoutKamInput, OrderUncheckedCreateWithoutKamInput> | OrderCreateWithoutKamInput[] | OrderUncheckedCreateWithoutKamInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutKamInput | OrderCreateOrConnectWithoutKamInput[]
    createMany?: OrderCreateManyKamInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OrderUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<OrderCreateWithoutCreatedByInput, OrderUncheckedCreateWithoutCreatedByInput> | OrderCreateWithoutCreatedByInput[] | OrderUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCreatedByInput | OrderCreateOrConnectWithoutCreatedByInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCreatedByInput | OrderUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: OrderCreateManyCreatedByInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCreatedByInput | OrderUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCreatedByInput | OrderUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutKamNestedInput = {
    create?: XOR<OrderCreateWithoutKamInput, OrderUncheckedCreateWithoutKamInput> | OrderCreateWithoutKamInput[] | OrderUncheckedCreateWithoutKamInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutKamInput | OrderCreateOrConnectWithoutKamInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutKamInput | OrderUpsertWithWhereUniqueWithoutKamInput[]
    createMany?: OrderCreateManyKamInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutKamInput | OrderUpdateWithWhereUniqueWithoutKamInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutKamInput | OrderUpdateManyWithWhereWithoutKamInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type AreaUpdateOneWithoutUsersNestedInput = {
    create?: XOR<AreaCreateWithoutUsersInput, AreaUncheckedCreateWithoutUsersInput>
    connectOrCreate?: AreaCreateOrConnectWithoutUsersInput
    upsert?: AreaUpsertWithoutUsersInput
    disconnect?: AreaWhereInput | boolean
    delete?: AreaWhereInput | boolean
    connect?: AreaWhereUniqueInput
    update?: XOR<XOR<AreaUpdateToOneWithWhereWithoutUsersInput, AreaUpdateWithoutUsersInput>, AreaUncheckedUpdateWithoutUsersInput>
  }

  export type CityUpdateOneWithoutUsersNestedInput = {
    create?: XOR<CityCreateWithoutUsersInput, CityUncheckedCreateWithoutUsersInput>
    connectOrCreate?: CityCreateOrConnectWithoutUsersInput
    upsert?: CityUpsertWithoutUsersInput
    disconnect?: CityWhereInput | boolean
    delete?: CityWhereInput | boolean
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutUsersInput, CityUpdateWithoutUsersInput>, CityUncheckedUpdateWithoutUsersInput>
  }

  export type DistributorUpdateOneWithoutUsersNestedInput = {
    create?: XOR<DistributorCreateWithoutUsersInput, DistributorUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DistributorCreateOrConnectWithoutUsersInput
    upsert?: DistributorUpsertWithoutUsersInput
    disconnect?: DistributorWhereInput | boolean
    delete?: DistributorWhereInput | boolean
    connect?: DistributorWhereUniqueInput
    update?: XOR<XOR<DistributorUpdateToOneWithWhereWithoutUsersInput, DistributorUpdateWithoutUsersInput>, DistributorUncheckedUpdateWithoutUsersInput>
  }

  export type OrderUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<OrderCreateWithoutCreatedByInput, OrderUncheckedCreateWithoutCreatedByInput> | OrderCreateWithoutCreatedByInput[] | OrderUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCreatedByInput | OrderCreateOrConnectWithoutCreatedByInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCreatedByInput | OrderUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: OrderCreateManyCreatedByInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCreatedByInput | OrderUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCreatedByInput | OrderUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutKamNestedInput = {
    create?: XOR<OrderCreateWithoutKamInput, OrderUncheckedCreateWithoutKamInput> | OrderCreateWithoutKamInput[] | OrderUncheckedCreateWithoutKamInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutKamInput | OrderCreateOrConnectWithoutKamInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutKamInput | OrderUpsertWithWhereUniqueWithoutKamInput[]
    createMany?: OrderCreateManyKamInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutKamInput | OrderUpdateWithWhereUniqueWithoutKamInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutKamInput | OrderUpdateManyWithWhereWithoutKamInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type AreaCreateNestedManyWithoutCityInput = {
    create?: XOR<AreaCreateWithoutCityInput, AreaUncheckedCreateWithoutCityInput> | AreaCreateWithoutCityInput[] | AreaUncheckedCreateWithoutCityInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutCityInput | AreaCreateOrConnectWithoutCityInput[]
    createMany?: AreaCreateManyCityInputEnvelope
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
  }

  export type DistributorCreateNestedManyWithoutCityInput = {
    create?: XOR<DistributorCreateWithoutCityInput, DistributorUncheckedCreateWithoutCityInput> | DistributorCreateWithoutCityInput[] | DistributorUncheckedCreateWithoutCityInput[]
    connectOrCreate?: DistributorCreateOrConnectWithoutCityInput | DistributorCreateOrConnectWithoutCityInput[]
    createMany?: DistributorCreateManyCityInputEnvelope
    connect?: DistributorWhereUniqueInput | DistributorWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutCityInput = {
    create?: XOR<OrderCreateWithoutCityInput, OrderUncheckedCreateWithoutCityInput> | OrderCreateWithoutCityInput[] | OrderUncheckedCreateWithoutCityInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCityInput | OrderCreateOrConnectWithoutCityInput[]
    createMany?: OrderCreateManyCityInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type PatientCreateNestedManyWithoutCityInput = {
    create?: XOR<PatientCreateWithoutCityInput, PatientUncheckedCreateWithoutCityInput> | PatientCreateWithoutCityInput[] | PatientUncheckedCreateWithoutCityInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutCityInput | PatientCreateOrConnectWithoutCityInput[]
    createMany?: PatientCreateManyCityInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutCityInput = {
    create?: XOR<UserCreateWithoutCityInput, UserUncheckedCreateWithoutCityInput> | UserCreateWithoutCityInput[] | UserUncheckedCreateWithoutCityInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCityInput | UserCreateOrConnectWithoutCityInput[]
    createMany?: UserCreateManyCityInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type AreaUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<AreaCreateWithoutCityInput, AreaUncheckedCreateWithoutCityInput> | AreaCreateWithoutCityInput[] | AreaUncheckedCreateWithoutCityInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutCityInput | AreaCreateOrConnectWithoutCityInput[]
    createMany?: AreaCreateManyCityInputEnvelope
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
  }

  export type DistributorUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<DistributorCreateWithoutCityInput, DistributorUncheckedCreateWithoutCityInput> | DistributorCreateWithoutCityInput[] | DistributorUncheckedCreateWithoutCityInput[]
    connectOrCreate?: DistributorCreateOrConnectWithoutCityInput | DistributorCreateOrConnectWithoutCityInput[]
    createMany?: DistributorCreateManyCityInputEnvelope
    connect?: DistributorWhereUniqueInput | DistributorWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<OrderCreateWithoutCityInput, OrderUncheckedCreateWithoutCityInput> | OrderCreateWithoutCityInput[] | OrderUncheckedCreateWithoutCityInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCityInput | OrderCreateOrConnectWithoutCityInput[]
    createMany?: OrderCreateManyCityInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type PatientUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<PatientCreateWithoutCityInput, PatientUncheckedCreateWithoutCityInput> | PatientCreateWithoutCityInput[] | PatientUncheckedCreateWithoutCityInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutCityInput | PatientCreateOrConnectWithoutCityInput[]
    createMany?: PatientCreateManyCityInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCityInput = {
    create?: XOR<UserCreateWithoutCityInput, UserUncheckedCreateWithoutCityInput> | UserCreateWithoutCityInput[] | UserUncheckedCreateWithoutCityInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCityInput | UserCreateOrConnectWithoutCityInput[]
    createMany?: UserCreateManyCityInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type AreaUpdateManyWithoutCityNestedInput = {
    create?: XOR<AreaCreateWithoutCityInput, AreaUncheckedCreateWithoutCityInput> | AreaCreateWithoutCityInput[] | AreaUncheckedCreateWithoutCityInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutCityInput | AreaCreateOrConnectWithoutCityInput[]
    upsert?: AreaUpsertWithWhereUniqueWithoutCityInput | AreaUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: AreaCreateManyCityInputEnvelope
    set?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    disconnect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    delete?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    update?: AreaUpdateWithWhereUniqueWithoutCityInput | AreaUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: AreaUpdateManyWithWhereWithoutCityInput | AreaUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: AreaScalarWhereInput | AreaScalarWhereInput[]
  }

  export type DistributorUpdateManyWithoutCityNestedInput = {
    create?: XOR<DistributorCreateWithoutCityInput, DistributorUncheckedCreateWithoutCityInput> | DistributorCreateWithoutCityInput[] | DistributorUncheckedCreateWithoutCityInput[]
    connectOrCreate?: DistributorCreateOrConnectWithoutCityInput | DistributorCreateOrConnectWithoutCityInput[]
    upsert?: DistributorUpsertWithWhereUniqueWithoutCityInput | DistributorUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: DistributorCreateManyCityInputEnvelope
    set?: DistributorWhereUniqueInput | DistributorWhereUniqueInput[]
    disconnect?: DistributorWhereUniqueInput | DistributorWhereUniqueInput[]
    delete?: DistributorWhereUniqueInput | DistributorWhereUniqueInput[]
    connect?: DistributorWhereUniqueInput | DistributorWhereUniqueInput[]
    update?: DistributorUpdateWithWhereUniqueWithoutCityInput | DistributorUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: DistributorUpdateManyWithWhereWithoutCityInput | DistributorUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: DistributorScalarWhereInput | DistributorScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutCityNestedInput = {
    create?: XOR<OrderCreateWithoutCityInput, OrderUncheckedCreateWithoutCityInput> | OrderCreateWithoutCityInput[] | OrderUncheckedCreateWithoutCityInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCityInput | OrderCreateOrConnectWithoutCityInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCityInput | OrderUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: OrderCreateManyCityInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCityInput | OrderUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCityInput | OrderUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type PatientUpdateManyWithoutCityNestedInput = {
    create?: XOR<PatientCreateWithoutCityInput, PatientUncheckedCreateWithoutCityInput> | PatientCreateWithoutCityInput[] | PatientUncheckedCreateWithoutCityInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutCityInput | PatientCreateOrConnectWithoutCityInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutCityInput | PatientUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: PatientCreateManyCityInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutCityInput | PatientUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutCityInput | PatientUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type UserUpdateManyWithoutCityNestedInput = {
    create?: XOR<UserCreateWithoutCityInput, UserUncheckedCreateWithoutCityInput> | UserCreateWithoutCityInput[] | UserUncheckedCreateWithoutCityInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCityInput | UserCreateOrConnectWithoutCityInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCityInput | UserUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: UserCreateManyCityInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCityInput | UserUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCityInput | UserUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type AreaUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<AreaCreateWithoutCityInput, AreaUncheckedCreateWithoutCityInput> | AreaCreateWithoutCityInput[] | AreaUncheckedCreateWithoutCityInput[]
    connectOrCreate?: AreaCreateOrConnectWithoutCityInput | AreaCreateOrConnectWithoutCityInput[]
    upsert?: AreaUpsertWithWhereUniqueWithoutCityInput | AreaUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: AreaCreateManyCityInputEnvelope
    set?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    disconnect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    delete?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    connect?: AreaWhereUniqueInput | AreaWhereUniqueInput[]
    update?: AreaUpdateWithWhereUniqueWithoutCityInput | AreaUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: AreaUpdateManyWithWhereWithoutCityInput | AreaUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: AreaScalarWhereInput | AreaScalarWhereInput[]
  }

  export type DistributorUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<DistributorCreateWithoutCityInput, DistributorUncheckedCreateWithoutCityInput> | DistributorCreateWithoutCityInput[] | DistributorUncheckedCreateWithoutCityInput[]
    connectOrCreate?: DistributorCreateOrConnectWithoutCityInput | DistributorCreateOrConnectWithoutCityInput[]
    upsert?: DistributorUpsertWithWhereUniqueWithoutCityInput | DistributorUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: DistributorCreateManyCityInputEnvelope
    set?: DistributorWhereUniqueInput | DistributorWhereUniqueInput[]
    disconnect?: DistributorWhereUniqueInput | DistributorWhereUniqueInput[]
    delete?: DistributorWhereUniqueInput | DistributorWhereUniqueInput[]
    connect?: DistributorWhereUniqueInput | DistributorWhereUniqueInput[]
    update?: DistributorUpdateWithWhereUniqueWithoutCityInput | DistributorUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: DistributorUpdateManyWithWhereWithoutCityInput | DistributorUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: DistributorScalarWhereInput | DistributorScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<OrderCreateWithoutCityInput, OrderUncheckedCreateWithoutCityInput> | OrderCreateWithoutCityInput[] | OrderUncheckedCreateWithoutCityInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCityInput | OrderCreateOrConnectWithoutCityInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCityInput | OrderUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: OrderCreateManyCityInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCityInput | OrderUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCityInput | OrderUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type PatientUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<PatientCreateWithoutCityInput, PatientUncheckedCreateWithoutCityInput> | PatientCreateWithoutCityInput[] | PatientUncheckedCreateWithoutCityInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutCityInput | PatientCreateOrConnectWithoutCityInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutCityInput | PatientUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: PatientCreateManyCityInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutCityInput | PatientUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutCityInput | PatientUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCityNestedInput = {
    create?: XOR<UserCreateWithoutCityInput, UserUncheckedCreateWithoutCityInput> | UserCreateWithoutCityInput[] | UserUncheckedCreateWithoutCityInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCityInput | UserCreateOrConnectWithoutCityInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCityInput | UserUpsertWithWhereUniqueWithoutCityInput[]
    createMany?: UserCreateManyCityInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCityInput | UserUpdateWithWhereUniqueWithoutCityInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCityInput | UserUpdateManyWithWhereWithoutCityInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CityCreateNestedOneWithoutAreasInput = {
    create?: XOR<CityCreateWithoutAreasInput, CityUncheckedCreateWithoutAreasInput>
    connectOrCreate?: CityCreateOrConnectWithoutAreasInput
    connect?: CityWhereUniqueInput
  }

  export type DistributorCreateNestedManyWithoutAreaInput = {
    create?: XOR<DistributorCreateWithoutAreaInput, DistributorUncheckedCreateWithoutAreaInput> | DistributorCreateWithoutAreaInput[] | DistributorUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: DistributorCreateOrConnectWithoutAreaInput | DistributorCreateOrConnectWithoutAreaInput[]
    createMany?: DistributorCreateManyAreaInputEnvelope
    connect?: DistributorWhereUniqueInput | DistributorWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutAreaInput = {
    create?: XOR<OrderCreateWithoutAreaInput, OrderUncheckedCreateWithoutAreaInput> | OrderCreateWithoutAreaInput[] | OrderUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutAreaInput | OrderCreateOrConnectWithoutAreaInput[]
    createMany?: OrderCreateManyAreaInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type PatientCreateNestedManyWithoutAreaInput = {
    create?: XOR<PatientCreateWithoutAreaInput, PatientUncheckedCreateWithoutAreaInput> | PatientCreateWithoutAreaInput[] | PatientUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutAreaInput | PatientCreateOrConnectWithoutAreaInput[]
    createMany?: PatientCreateManyAreaInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutAreaInput = {
    create?: XOR<UserCreateWithoutAreaInput, UserUncheckedCreateWithoutAreaInput> | UserCreateWithoutAreaInput[] | UserUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAreaInput | UserCreateOrConnectWithoutAreaInput[]
    createMany?: UserCreateManyAreaInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DistributorUncheckedCreateNestedManyWithoutAreaInput = {
    create?: XOR<DistributorCreateWithoutAreaInput, DistributorUncheckedCreateWithoutAreaInput> | DistributorCreateWithoutAreaInput[] | DistributorUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: DistributorCreateOrConnectWithoutAreaInput | DistributorCreateOrConnectWithoutAreaInput[]
    createMany?: DistributorCreateManyAreaInputEnvelope
    connect?: DistributorWhereUniqueInput | DistributorWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutAreaInput = {
    create?: XOR<OrderCreateWithoutAreaInput, OrderUncheckedCreateWithoutAreaInput> | OrderCreateWithoutAreaInput[] | OrderUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutAreaInput | OrderCreateOrConnectWithoutAreaInput[]
    createMany?: OrderCreateManyAreaInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type PatientUncheckedCreateNestedManyWithoutAreaInput = {
    create?: XOR<PatientCreateWithoutAreaInput, PatientUncheckedCreateWithoutAreaInput> | PatientCreateWithoutAreaInput[] | PatientUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutAreaInput | PatientCreateOrConnectWithoutAreaInput[]
    createMany?: PatientCreateManyAreaInputEnvelope
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutAreaInput = {
    create?: XOR<UserCreateWithoutAreaInput, UserUncheckedCreateWithoutAreaInput> | UserCreateWithoutAreaInput[] | UserUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAreaInput | UserCreateOrConnectWithoutAreaInput[]
    createMany?: UserCreateManyAreaInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CityUpdateOneRequiredWithoutAreasNestedInput = {
    create?: XOR<CityCreateWithoutAreasInput, CityUncheckedCreateWithoutAreasInput>
    connectOrCreate?: CityCreateOrConnectWithoutAreasInput
    upsert?: CityUpsertWithoutAreasInput
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutAreasInput, CityUpdateWithoutAreasInput>, CityUncheckedUpdateWithoutAreasInput>
  }

  export type DistributorUpdateManyWithoutAreaNestedInput = {
    create?: XOR<DistributorCreateWithoutAreaInput, DistributorUncheckedCreateWithoutAreaInput> | DistributorCreateWithoutAreaInput[] | DistributorUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: DistributorCreateOrConnectWithoutAreaInput | DistributorCreateOrConnectWithoutAreaInput[]
    upsert?: DistributorUpsertWithWhereUniqueWithoutAreaInput | DistributorUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: DistributorCreateManyAreaInputEnvelope
    set?: DistributorWhereUniqueInput | DistributorWhereUniqueInput[]
    disconnect?: DistributorWhereUniqueInput | DistributorWhereUniqueInput[]
    delete?: DistributorWhereUniqueInput | DistributorWhereUniqueInput[]
    connect?: DistributorWhereUniqueInput | DistributorWhereUniqueInput[]
    update?: DistributorUpdateWithWhereUniqueWithoutAreaInput | DistributorUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: DistributorUpdateManyWithWhereWithoutAreaInput | DistributorUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: DistributorScalarWhereInput | DistributorScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutAreaNestedInput = {
    create?: XOR<OrderCreateWithoutAreaInput, OrderUncheckedCreateWithoutAreaInput> | OrderCreateWithoutAreaInput[] | OrderUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutAreaInput | OrderCreateOrConnectWithoutAreaInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutAreaInput | OrderUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: OrderCreateManyAreaInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutAreaInput | OrderUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutAreaInput | OrderUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type PatientUpdateManyWithoutAreaNestedInput = {
    create?: XOR<PatientCreateWithoutAreaInput, PatientUncheckedCreateWithoutAreaInput> | PatientCreateWithoutAreaInput[] | PatientUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutAreaInput | PatientCreateOrConnectWithoutAreaInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutAreaInput | PatientUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: PatientCreateManyAreaInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutAreaInput | PatientUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutAreaInput | PatientUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type UserUpdateManyWithoutAreaNestedInput = {
    create?: XOR<UserCreateWithoutAreaInput, UserUncheckedCreateWithoutAreaInput> | UserCreateWithoutAreaInput[] | UserUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAreaInput | UserCreateOrConnectWithoutAreaInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAreaInput | UserUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: UserCreateManyAreaInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAreaInput | UserUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAreaInput | UserUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type DistributorUncheckedUpdateManyWithoutAreaNestedInput = {
    create?: XOR<DistributorCreateWithoutAreaInput, DistributorUncheckedCreateWithoutAreaInput> | DistributorCreateWithoutAreaInput[] | DistributorUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: DistributorCreateOrConnectWithoutAreaInput | DistributorCreateOrConnectWithoutAreaInput[]
    upsert?: DistributorUpsertWithWhereUniqueWithoutAreaInput | DistributorUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: DistributorCreateManyAreaInputEnvelope
    set?: DistributorWhereUniqueInput | DistributorWhereUniqueInput[]
    disconnect?: DistributorWhereUniqueInput | DistributorWhereUniqueInput[]
    delete?: DistributorWhereUniqueInput | DistributorWhereUniqueInput[]
    connect?: DistributorWhereUniqueInput | DistributorWhereUniqueInput[]
    update?: DistributorUpdateWithWhereUniqueWithoutAreaInput | DistributorUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: DistributorUpdateManyWithWhereWithoutAreaInput | DistributorUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: DistributorScalarWhereInput | DistributorScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutAreaNestedInput = {
    create?: XOR<OrderCreateWithoutAreaInput, OrderUncheckedCreateWithoutAreaInput> | OrderCreateWithoutAreaInput[] | OrderUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutAreaInput | OrderCreateOrConnectWithoutAreaInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutAreaInput | OrderUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: OrderCreateManyAreaInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutAreaInput | OrderUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutAreaInput | OrderUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type PatientUncheckedUpdateManyWithoutAreaNestedInput = {
    create?: XOR<PatientCreateWithoutAreaInput, PatientUncheckedCreateWithoutAreaInput> | PatientCreateWithoutAreaInput[] | PatientUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: PatientCreateOrConnectWithoutAreaInput | PatientCreateOrConnectWithoutAreaInput[]
    upsert?: PatientUpsertWithWhereUniqueWithoutAreaInput | PatientUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: PatientCreateManyAreaInputEnvelope
    set?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    disconnect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    delete?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    connect?: PatientWhereUniqueInput | PatientWhereUniqueInput[]
    update?: PatientUpdateWithWhereUniqueWithoutAreaInput | PatientUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: PatientUpdateManyWithWhereWithoutAreaInput | PatientUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: PatientScalarWhereInput | PatientScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutAreaNestedInput = {
    create?: XOR<UserCreateWithoutAreaInput, UserUncheckedCreateWithoutAreaInput> | UserCreateWithoutAreaInput[] | UserUncheckedCreateWithoutAreaInput[]
    connectOrCreate?: UserCreateOrConnectWithoutAreaInput | UserCreateOrConnectWithoutAreaInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutAreaInput | UserUpsertWithWhereUniqueWithoutAreaInput[]
    createMany?: UserCreateManyAreaInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutAreaInput | UserUpdateWithWhereUniqueWithoutAreaInput[]
    updateMany?: UserUpdateManyWithWhereWithoutAreaInput | UserUpdateManyWithWhereWithoutAreaInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type AreaCreateNestedOneWithoutDistributorsInput = {
    create?: XOR<AreaCreateWithoutDistributorsInput, AreaUncheckedCreateWithoutDistributorsInput>
    connectOrCreate?: AreaCreateOrConnectWithoutDistributorsInput
    connect?: AreaWhereUniqueInput
  }

  export type CityCreateNestedOneWithoutDistributorsInput = {
    create?: XOR<CityCreateWithoutDistributorsInput, CityUncheckedCreateWithoutDistributorsInput>
    connectOrCreate?: CityCreateOrConnectWithoutDistributorsInput
    connect?: CityWhereUniqueInput
  }

  export type InventoryCreateNestedManyWithoutDistributorInput = {
    create?: XOR<InventoryCreateWithoutDistributorInput, InventoryUncheckedCreateWithoutDistributorInput> | InventoryCreateWithoutDistributorInput[] | InventoryUncheckedCreateWithoutDistributorInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutDistributorInput | InventoryCreateOrConnectWithoutDistributorInput[]
    createMany?: InventoryCreateManyDistributorInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutDistributorInput = {
    create?: XOR<OrderCreateWithoutDistributorInput, OrderUncheckedCreateWithoutDistributorInput> | OrderCreateWithoutDistributorInput[] | OrderUncheckedCreateWithoutDistributorInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutDistributorInput | OrderCreateOrConnectWithoutDistributorInput[]
    createMany?: OrderCreateManyDistributorInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutDistributorInput = {
    create?: XOR<UserCreateWithoutDistributorInput, UserUncheckedCreateWithoutDistributorInput> | UserCreateWithoutDistributorInput[] | UserUncheckedCreateWithoutDistributorInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDistributorInput | UserCreateOrConnectWithoutDistributorInput[]
    createMany?: UserCreateManyDistributorInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type InventoryUncheckedCreateNestedManyWithoutDistributorInput = {
    create?: XOR<InventoryCreateWithoutDistributorInput, InventoryUncheckedCreateWithoutDistributorInput> | InventoryCreateWithoutDistributorInput[] | InventoryUncheckedCreateWithoutDistributorInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutDistributorInput | InventoryCreateOrConnectWithoutDistributorInput[]
    createMany?: InventoryCreateManyDistributorInputEnvelope
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutDistributorInput = {
    create?: XOR<OrderCreateWithoutDistributorInput, OrderUncheckedCreateWithoutDistributorInput> | OrderCreateWithoutDistributorInput[] | OrderUncheckedCreateWithoutDistributorInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutDistributorInput | OrderCreateOrConnectWithoutDistributorInput[]
    createMany?: OrderCreateManyDistributorInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutDistributorInput = {
    create?: XOR<UserCreateWithoutDistributorInput, UserUncheckedCreateWithoutDistributorInput> | UserCreateWithoutDistributorInput[] | UserUncheckedCreateWithoutDistributorInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDistributorInput | UserCreateOrConnectWithoutDistributorInput[]
    createMany?: UserCreateManyDistributorInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type AreaUpdateOneRequiredWithoutDistributorsNestedInput = {
    create?: XOR<AreaCreateWithoutDistributorsInput, AreaUncheckedCreateWithoutDistributorsInput>
    connectOrCreate?: AreaCreateOrConnectWithoutDistributorsInput
    upsert?: AreaUpsertWithoutDistributorsInput
    connect?: AreaWhereUniqueInput
    update?: XOR<XOR<AreaUpdateToOneWithWhereWithoutDistributorsInput, AreaUpdateWithoutDistributorsInput>, AreaUncheckedUpdateWithoutDistributorsInput>
  }

  export type CityUpdateOneRequiredWithoutDistributorsNestedInput = {
    create?: XOR<CityCreateWithoutDistributorsInput, CityUncheckedCreateWithoutDistributorsInput>
    connectOrCreate?: CityCreateOrConnectWithoutDistributorsInput
    upsert?: CityUpsertWithoutDistributorsInput
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutDistributorsInput, CityUpdateWithoutDistributorsInput>, CityUncheckedUpdateWithoutDistributorsInput>
  }

  export type InventoryUpdateManyWithoutDistributorNestedInput = {
    create?: XOR<InventoryCreateWithoutDistributorInput, InventoryUncheckedCreateWithoutDistributorInput> | InventoryCreateWithoutDistributorInput[] | InventoryUncheckedCreateWithoutDistributorInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutDistributorInput | InventoryCreateOrConnectWithoutDistributorInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutDistributorInput | InventoryUpsertWithWhereUniqueWithoutDistributorInput[]
    createMany?: InventoryCreateManyDistributorInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutDistributorInput | InventoryUpdateWithWhereUniqueWithoutDistributorInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutDistributorInput | InventoryUpdateManyWithWhereWithoutDistributorInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutDistributorNestedInput = {
    create?: XOR<OrderCreateWithoutDistributorInput, OrderUncheckedCreateWithoutDistributorInput> | OrderCreateWithoutDistributorInput[] | OrderUncheckedCreateWithoutDistributorInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutDistributorInput | OrderCreateOrConnectWithoutDistributorInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutDistributorInput | OrderUpsertWithWhereUniqueWithoutDistributorInput[]
    createMany?: OrderCreateManyDistributorInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutDistributorInput | OrderUpdateWithWhereUniqueWithoutDistributorInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutDistributorInput | OrderUpdateManyWithWhereWithoutDistributorInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type UserUpdateManyWithoutDistributorNestedInput = {
    create?: XOR<UserCreateWithoutDistributorInput, UserUncheckedCreateWithoutDistributorInput> | UserCreateWithoutDistributorInput[] | UserUncheckedCreateWithoutDistributorInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDistributorInput | UserCreateOrConnectWithoutDistributorInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDistributorInput | UserUpsertWithWhereUniqueWithoutDistributorInput[]
    createMany?: UserCreateManyDistributorInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDistributorInput | UserUpdateWithWhereUniqueWithoutDistributorInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDistributorInput | UserUpdateManyWithWhereWithoutDistributorInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type InventoryUncheckedUpdateManyWithoutDistributorNestedInput = {
    create?: XOR<InventoryCreateWithoutDistributorInput, InventoryUncheckedCreateWithoutDistributorInput> | InventoryCreateWithoutDistributorInput[] | InventoryUncheckedCreateWithoutDistributorInput[]
    connectOrCreate?: InventoryCreateOrConnectWithoutDistributorInput | InventoryCreateOrConnectWithoutDistributorInput[]
    upsert?: InventoryUpsertWithWhereUniqueWithoutDistributorInput | InventoryUpsertWithWhereUniqueWithoutDistributorInput[]
    createMany?: InventoryCreateManyDistributorInputEnvelope
    set?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    disconnect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    delete?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    connect?: InventoryWhereUniqueInput | InventoryWhereUniqueInput[]
    update?: InventoryUpdateWithWhereUniqueWithoutDistributorInput | InventoryUpdateWithWhereUniqueWithoutDistributorInput[]
    updateMany?: InventoryUpdateManyWithWhereWithoutDistributorInput | InventoryUpdateManyWithWhereWithoutDistributorInput[]
    deleteMany?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutDistributorNestedInput = {
    create?: XOR<OrderCreateWithoutDistributorInput, OrderUncheckedCreateWithoutDistributorInput> | OrderCreateWithoutDistributorInput[] | OrderUncheckedCreateWithoutDistributorInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutDistributorInput | OrderCreateOrConnectWithoutDistributorInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutDistributorInput | OrderUpsertWithWhereUniqueWithoutDistributorInput[]
    createMany?: OrderCreateManyDistributorInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutDistributorInput | OrderUpdateWithWhereUniqueWithoutDistributorInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutDistributorInput | OrderUpdateManyWithWhereWithoutDistributorInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutDistributorNestedInput = {
    create?: XOR<UserCreateWithoutDistributorInput, UserUncheckedCreateWithoutDistributorInput> | UserCreateWithoutDistributorInput[] | UserUncheckedCreateWithoutDistributorInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDistributorInput | UserCreateOrConnectWithoutDistributorInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDistributorInput | UserUpsertWithWhereUniqueWithoutDistributorInput[]
    createMany?: UserCreateManyDistributorInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDistributorInput | UserUpdateWithWhereUniqueWithoutDistributorInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDistributorInput | UserUpdateManyWithWhereWithoutDistributorInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type OrderCreateNestedManyWithoutPatientInput = {
    create?: XOR<OrderCreateWithoutPatientInput, OrderUncheckedCreateWithoutPatientInput> | OrderCreateWithoutPatientInput[] | OrderUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPatientInput | OrderCreateOrConnectWithoutPatientInput[]
    createMany?: OrderCreateManyPatientInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type AreaCreateNestedOneWithoutPatientsInput = {
    create?: XOR<AreaCreateWithoutPatientsInput, AreaUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: AreaCreateOrConnectWithoutPatientsInput
    connect?: AreaWhereUniqueInput
  }

  export type CityCreateNestedOneWithoutPatientsInput = {
    create?: XOR<CityCreateWithoutPatientsInput, CityUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: CityCreateOrConnectWithoutPatientsInput
    connect?: CityWhereUniqueInput
  }

  export type PostAdministrationFormCreateNestedManyWithoutPatientInput = {
    create?: XOR<PostAdministrationFormCreateWithoutPatientInput, PostAdministrationFormUncheckedCreateWithoutPatientInput> | PostAdministrationFormCreateWithoutPatientInput[] | PostAdministrationFormUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PostAdministrationFormCreateOrConnectWithoutPatientInput | PostAdministrationFormCreateOrConnectWithoutPatientInput[]
    createMany?: PostAdministrationFormCreateManyPatientInputEnvelope
    connect?: PostAdministrationFormWhereUniqueInput | PostAdministrationFormWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<OrderCreateWithoutPatientInput, OrderUncheckedCreateWithoutPatientInput> | OrderCreateWithoutPatientInput[] | OrderUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPatientInput | OrderCreateOrConnectWithoutPatientInput[]
    createMany?: OrderCreateManyPatientInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type PostAdministrationFormUncheckedCreateNestedManyWithoutPatientInput = {
    create?: XOR<PostAdministrationFormCreateWithoutPatientInput, PostAdministrationFormUncheckedCreateWithoutPatientInput> | PostAdministrationFormCreateWithoutPatientInput[] | PostAdministrationFormUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PostAdministrationFormCreateOrConnectWithoutPatientInput | PostAdministrationFormCreateOrConnectWithoutPatientInput[]
    createMany?: PostAdministrationFormCreateManyPatientInputEnvelope
    connect?: PostAdministrationFormWhereUniqueInput | PostAdministrationFormWhereUniqueInput[]
  }

  export type OrderUpdateManyWithoutPatientNestedInput = {
    create?: XOR<OrderCreateWithoutPatientInput, OrderUncheckedCreateWithoutPatientInput> | OrderCreateWithoutPatientInput[] | OrderUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPatientInput | OrderCreateOrConnectWithoutPatientInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutPatientInput | OrderUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: OrderCreateManyPatientInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutPatientInput | OrderUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutPatientInput | OrderUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type AreaUpdateOneWithoutPatientsNestedInput = {
    create?: XOR<AreaCreateWithoutPatientsInput, AreaUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: AreaCreateOrConnectWithoutPatientsInput
    upsert?: AreaUpsertWithoutPatientsInput
    disconnect?: AreaWhereInput | boolean
    delete?: AreaWhereInput | boolean
    connect?: AreaWhereUniqueInput
    update?: XOR<XOR<AreaUpdateToOneWithWhereWithoutPatientsInput, AreaUpdateWithoutPatientsInput>, AreaUncheckedUpdateWithoutPatientsInput>
  }

  export type CityUpdateOneWithoutPatientsNestedInput = {
    create?: XOR<CityCreateWithoutPatientsInput, CityUncheckedCreateWithoutPatientsInput>
    connectOrCreate?: CityCreateOrConnectWithoutPatientsInput
    upsert?: CityUpsertWithoutPatientsInput
    disconnect?: CityWhereInput | boolean
    delete?: CityWhereInput | boolean
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutPatientsInput, CityUpdateWithoutPatientsInput>, CityUncheckedUpdateWithoutPatientsInput>
  }

  export type PostAdministrationFormUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PostAdministrationFormCreateWithoutPatientInput, PostAdministrationFormUncheckedCreateWithoutPatientInput> | PostAdministrationFormCreateWithoutPatientInput[] | PostAdministrationFormUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PostAdministrationFormCreateOrConnectWithoutPatientInput | PostAdministrationFormCreateOrConnectWithoutPatientInput[]
    upsert?: PostAdministrationFormUpsertWithWhereUniqueWithoutPatientInput | PostAdministrationFormUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PostAdministrationFormCreateManyPatientInputEnvelope
    set?: PostAdministrationFormWhereUniqueInput | PostAdministrationFormWhereUniqueInput[]
    disconnect?: PostAdministrationFormWhereUniqueInput | PostAdministrationFormWhereUniqueInput[]
    delete?: PostAdministrationFormWhereUniqueInput | PostAdministrationFormWhereUniqueInput[]
    connect?: PostAdministrationFormWhereUniqueInput | PostAdministrationFormWhereUniqueInput[]
    update?: PostAdministrationFormUpdateWithWhereUniqueWithoutPatientInput | PostAdministrationFormUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PostAdministrationFormUpdateManyWithWhereWithoutPatientInput | PostAdministrationFormUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PostAdministrationFormScalarWhereInput | PostAdministrationFormScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<OrderCreateWithoutPatientInput, OrderUncheckedCreateWithoutPatientInput> | OrderCreateWithoutPatientInput[] | OrderUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPatientInput | OrderCreateOrConnectWithoutPatientInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutPatientInput | OrderUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: OrderCreateManyPatientInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutPatientInput | OrderUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutPatientInput | OrderUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type PostAdministrationFormUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: XOR<PostAdministrationFormCreateWithoutPatientInput, PostAdministrationFormUncheckedCreateWithoutPatientInput> | PostAdministrationFormCreateWithoutPatientInput[] | PostAdministrationFormUncheckedCreateWithoutPatientInput[]
    connectOrCreate?: PostAdministrationFormCreateOrConnectWithoutPatientInput | PostAdministrationFormCreateOrConnectWithoutPatientInput[]
    upsert?: PostAdministrationFormUpsertWithWhereUniqueWithoutPatientInput | PostAdministrationFormUpsertWithWhereUniqueWithoutPatientInput[]
    createMany?: PostAdministrationFormCreateManyPatientInputEnvelope
    set?: PostAdministrationFormWhereUniqueInput | PostAdministrationFormWhereUniqueInput[]
    disconnect?: PostAdministrationFormWhereUniqueInput | PostAdministrationFormWhereUniqueInput[]
    delete?: PostAdministrationFormWhereUniqueInput | PostAdministrationFormWhereUniqueInput[]
    connect?: PostAdministrationFormWhereUniqueInput | PostAdministrationFormWhereUniqueInput[]
    update?: PostAdministrationFormUpdateWithWhereUniqueWithoutPatientInput | PostAdministrationFormUpdateWithWhereUniqueWithoutPatientInput[]
    updateMany?: PostAdministrationFormUpdateManyWithWhereWithoutPatientInput | PostAdministrationFormUpdateManyWithWhereWithoutPatientInput[]
    deleteMany?: PostAdministrationFormScalarWhereInput | PostAdministrationFormScalarWhereInput[]
  }

  export type AreaCreateNestedOneWithoutOrdersInput = {
    create?: XOR<AreaCreateWithoutOrdersInput, AreaUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: AreaCreateOrConnectWithoutOrdersInput
    connect?: AreaWhereUniqueInput
  }

  export type CityCreateNestedOneWithoutOrdersInput = {
    create?: XOR<CityCreateWithoutOrdersInput, CityUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CityCreateOrConnectWithoutOrdersInput
    connect?: CityWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedOrdersInput = {
    create?: XOR<UserCreateWithoutCreatedOrdersInput, UserUncheckedCreateWithoutCreatedOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type DistributorCreateNestedOneWithoutOrdersInput = {
    create?: XOR<DistributorCreateWithoutOrdersInput, DistributorUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: DistributorCreateOrConnectWithoutOrdersInput
    connect?: DistributorWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutOrdersAsKamInput = {
    create?: XOR<UserCreateWithoutOrdersAsKamInput, UserUncheckedCreateWithoutOrdersAsKamInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersAsKamInput
    connect?: UserWhereUniqueInput
  }

  export type PatientCreateNestedOneWithoutOrdersInput = {
    create?: XOR<PatientCreateWithoutOrdersInput, PatientUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: PatientCreateOrConnectWithoutOrdersInput
    connect?: PatientWhereUniqueInput
  }

  export type PostAdministrationFormCreateNestedOneWithoutOrderInput = {
    create?: XOR<PostAdministrationFormCreateWithoutOrderInput, PostAdministrationFormUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PostAdministrationFormCreateOrConnectWithoutOrderInput
    connect?: PostAdministrationFormWhereUniqueInput
  }

  export type PostAdministrationFormUncheckedCreateNestedOneWithoutOrderInput = {
    create?: XOR<PostAdministrationFormCreateWithoutOrderInput, PostAdministrationFormUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PostAdministrationFormCreateOrConnectWithoutOrderInput
    connect?: PostAdministrationFormWhereUniqueInput
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type AreaUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<AreaCreateWithoutOrdersInput, AreaUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: AreaCreateOrConnectWithoutOrdersInput
    upsert?: AreaUpsertWithoutOrdersInput
    disconnect?: AreaWhereInput | boolean
    delete?: AreaWhereInput | boolean
    connect?: AreaWhereUniqueInput
    update?: XOR<XOR<AreaUpdateToOneWithWhereWithoutOrdersInput, AreaUpdateWithoutOrdersInput>, AreaUncheckedUpdateWithoutOrdersInput>
  }

  export type CityUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<CityCreateWithoutOrdersInput, CityUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: CityCreateOrConnectWithoutOrdersInput
    upsert?: CityUpsertWithoutOrdersInput
    connect?: CityWhereUniqueInput
    update?: XOR<XOR<CityUpdateToOneWithWhereWithoutOrdersInput, CityUpdateWithoutOrdersInput>, CityUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateOneRequiredWithoutCreatedOrdersNestedInput = {
    create?: XOR<UserCreateWithoutCreatedOrdersInput, UserUncheckedCreateWithoutCreatedOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedOrdersInput
    upsert?: UserUpsertWithoutCreatedOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedOrdersInput, UserUpdateWithoutCreatedOrdersInput>, UserUncheckedUpdateWithoutCreatedOrdersInput>
  }

  export type DistributorUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<DistributorCreateWithoutOrdersInput, DistributorUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: DistributorCreateOrConnectWithoutOrdersInput
    upsert?: DistributorUpsertWithoutOrdersInput
    disconnect?: DistributorWhereInput | boolean
    delete?: DistributorWhereInput | boolean
    connect?: DistributorWhereUniqueInput
    update?: XOR<XOR<DistributorUpdateToOneWithWhereWithoutOrdersInput, DistributorUpdateWithoutOrdersInput>, DistributorUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateOneWithoutOrdersAsKamNestedInput = {
    create?: XOR<UserCreateWithoutOrdersAsKamInput, UserUncheckedCreateWithoutOrdersAsKamInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrdersAsKamInput
    upsert?: UserUpsertWithoutOrdersAsKamInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrdersAsKamInput, UserUpdateWithoutOrdersAsKamInput>, UserUncheckedUpdateWithoutOrdersAsKamInput>
  }

  export type PatientUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<PatientCreateWithoutOrdersInput, PatientUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: PatientCreateOrConnectWithoutOrdersInput
    upsert?: PatientUpsertWithoutOrdersInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutOrdersInput, PatientUpdateWithoutOrdersInput>, PatientUncheckedUpdateWithoutOrdersInput>
  }

  export type PostAdministrationFormUpdateOneWithoutOrderNestedInput = {
    create?: XOR<PostAdministrationFormCreateWithoutOrderInput, PostAdministrationFormUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PostAdministrationFormCreateOrConnectWithoutOrderInput
    upsert?: PostAdministrationFormUpsertWithoutOrderInput
    disconnect?: PostAdministrationFormWhereInput | boolean
    delete?: PostAdministrationFormWhereInput | boolean
    connect?: PostAdministrationFormWhereUniqueInput
    update?: XOR<XOR<PostAdministrationFormUpdateToOneWithWhereWithoutOrderInput, PostAdministrationFormUpdateWithoutOrderInput>, PostAdministrationFormUncheckedUpdateWithoutOrderInput>
  }

  export type PostAdministrationFormUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: XOR<PostAdministrationFormCreateWithoutOrderInput, PostAdministrationFormUncheckedCreateWithoutOrderInput>
    connectOrCreate?: PostAdministrationFormCreateOrConnectWithoutOrderInput
    upsert?: PostAdministrationFormUpsertWithoutOrderInput
    disconnect?: PostAdministrationFormWhereInput | boolean
    delete?: PostAdministrationFormWhereInput | boolean
    connect?: PostAdministrationFormWhereUniqueInput
    update?: XOR<XOR<PostAdministrationFormUpdateToOneWithWhereWithoutOrderInput, PostAdministrationFormUpdateWithoutOrderInput>, PostAdministrationFormUncheckedUpdateWithoutOrderInput>
  }

  export type OrderCreateNestedOneWithoutPostFormInput = {
    create?: XOR<OrderCreateWithoutPostFormInput, OrderUncheckedCreateWithoutPostFormInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPostFormInput
    connect?: OrderWhereUniqueInput
  }

  export type PatientCreateNestedOneWithoutPostFormsInput = {
    create?: XOR<PatientCreateWithoutPostFormsInput, PatientUncheckedCreateWithoutPostFormsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutPostFormsInput
    connect?: PatientWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type OrderUpdateOneRequiredWithoutPostFormNestedInput = {
    create?: XOR<OrderCreateWithoutPostFormInput, OrderUncheckedCreateWithoutPostFormInput>
    connectOrCreate?: OrderCreateOrConnectWithoutPostFormInput
    upsert?: OrderUpsertWithoutPostFormInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutPostFormInput, OrderUpdateWithoutPostFormInput>, OrderUncheckedUpdateWithoutPostFormInput>
  }

  export type PatientUpdateOneRequiredWithoutPostFormsNestedInput = {
    create?: XOR<PatientCreateWithoutPostFormsInput, PatientUncheckedCreateWithoutPostFormsInput>
    connectOrCreate?: PatientCreateOrConnectWithoutPostFormsInput
    upsert?: PatientUpsertWithoutPostFormsInput
    connect?: PatientWhereUniqueInput
    update?: XOR<XOR<PatientUpdateToOneWithWhereWithoutPostFormsInput, PatientUpdateWithoutPostFormsInput>, PatientUncheckedUpdateWithoutPostFormsInput>
  }

  export type DistributorCreateNestedOneWithoutInventoryInput = {
    create?: XOR<DistributorCreateWithoutInventoryInput, DistributorUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: DistributorCreateOrConnectWithoutInventoryInput
    connect?: DistributorWhereUniqueInput
  }

  export type DistributorUpdateOneRequiredWithoutInventoryNestedInput = {
    create?: XOR<DistributorCreateWithoutInventoryInput, DistributorUncheckedCreateWithoutInventoryInput>
    connectOrCreate?: DistributorCreateOrConnectWithoutInventoryInput
    upsert?: DistributorUpsertWithoutInventoryInput
    connect?: DistributorWhereUniqueInput
    update?: XOR<XOR<DistributorUpdateToOneWithWhereWithoutInventoryInput, DistributorUpdateWithoutInventoryInput>, DistributorUncheckedUpdateWithoutInventoryInput>
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type OrderCreateWithoutCreatedByInput = {
    id?: string
    status?: $Enums.OrderStatus
    doctorName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    area?: AreaCreateNestedOneWithoutOrdersInput
    city: CityCreateNestedOneWithoutOrdersInput
    distributor?: DistributorCreateNestedOneWithoutOrdersInput
    kam?: UserCreateNestedOneWithoutOrdersAsKamInput
    patient: PatientCreateNestedOneWithoutOrdersInput
    postForm?: PostAdministrationFormCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutCreatedByInput = {
    id?: string
    patientId: string
    kamId?: string | null
    distributorId?: string | null
    cityId: string
    status?: $Enums.OrderStatus
    doctorName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    areaId?: string | null
    postForm?: PostAdministrationFormUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutCreatedByInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutCreatedByInput, OrderUncheckedCreateWithoutCreatedByInput>
  }

  export type OrderCreateManyCreatedByInputEnvelope = {
    data: OrderCreateManyCreatedByInput | OrderCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutKamInput = {
    id?: string
    status?: $Enums.OrderStatus
    doctorName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    area?: AreaCreateNestedOneWithoutOrdersInput
    city: CityCreateNestedOneWithoutOrdersInput
    createdBy: UserCreateNestedOneWithoutCreatedOrdersInput
    distributor?: DistributorCreateNestedOneWithoutOrdersInput
    patient: PatientCreateNestedOneWithoutOrdersInput
    postForm?: PostAdministrationFormCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutKamInput = {
    id?: string
    patientId: string
    distributorId?: string | null
    cityId: string
    createdById: string
    status?: $Enums.OrderStatus
    doctorName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    areaId?: string | null
    postForm?: PostAdministrationFormUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutKamInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutKamInput, OrderUncheckedCreateWithoutKamInput>
  }

  export type OrderCreateManyKamInputEnvelope = {
    data: OrderCreateManyKamInput | OrderCreateManyKamInput[]
    skipDuplicates?: boolean
  }

  export type AreaCreateWithoutUsersInput = {
    id?: string
    name: string
    city: CityCreateNestedOneWithoutAreasInput
    distributors?: DistributorCreateNestedManyWithoutAreaInput
    orders?: OrderCreateNestedManyWithoutAreaInput
    patients?: PatientCreateNestedManyWithoutAreaInput
  }

  export type AreaUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    cityId: string
    distributors?: DistributorUncheckedCreateNestedManyWithoutAreaInput
    orders?: OrderUncheckedCreateNestedManyWithoutAreaInput
    patients?: PatientUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaCreateOrConnectWithoutUsersInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutUsersInput, AreaUncheckedCreateWithoutUsersInput>
  }

  export type CityCreateWithoutUsersInput = {
    id?: string
    name: string
    areas?: AreaCreateNestedManyWithoutCityInput
    distributors?: DistributorCreateNestedManyWithoutCityInput
    orders?: OrderCreateNestedManyWithoutCityInput
    patients?: PatientCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    areas?: AreaUncheckedCreateNestedManyWithoutCityInput
    distributors?: DistributorUncheckedCreateNestedManyWithoutCityInput
    orders?: OrderUncheckedCreateNestedManyWithoutCityInput
    patients?: PatientUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutUsersInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutUsersInput, CityUncheckedCreateWithoutUsersInput>
  }

  export type DistributorCreateWithoutUsersInput = {
    id?: string
    name: string
    area: AreaCreateNestedOneWithoutDistributorsInput
    city: CityCreateNestedOneWithoutDistributorsInput
    inventory?: InventoryCreateNestedManyWithoutDistributorInput
    orders?: OrderCreateNestedManyWithoutDistributorInput
  }

  export type DistributorUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    cityId: string
    areaId: string
    inventory?: InventoryUncheckedCreateNestedManyWithoutDistributorInput
    orders?: OrderUncheckedCreateNestedManyWithoutDistributorInput
  }

  export type DistributorCreateOrConnectWithoutUsersInput = {
    where: DistributorWhereUniqueInput
    create: XOR<DistributorCreateWithoutUsersInput, DistributorUncheckedCreateWithoutUsersInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutCreatedByInput, OrderUncheckedUpdateWithoutCreatedByInput>
    create: XOR<OrderCreateWithoutCreatedByInput, OrderUncheckedCreateWithoutCreatedByInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutCreatedByInput, OrderUncheckedUpdateWithoutCreatedByInput>
  }

  export type OrderUpdateManyWithWhereWithoutCreatedByInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    patientId?: StringFilter<"Order"> | string
    kamId?: StringNullableFilter<"Order"> | string | null
    distributorId?: StringNullableFilter<"Order"> | string | null
    cityId?: StringFilter<"Order"> | string
    createdById?: StringFilter<"Order"> | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    doctorName?: StringNullableFilter<"Order"> | string | null
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    areaId?: StringNullableFilter<"Order"> | string | null
  }

  export type OrderUpsertWithWhereUniqueWithoutKamInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutKamInput, OrderUncheckedUpdateWithoutKamInput>
    create: XOR<OrderCreateWithoutKamInput, OrderUncheckedCreateWithoutKamInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutKamInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutKamInput, OrderUncheckedUpdateWithoutKamInput>
  }

  export type OrderUpdateManyWithWhereWithoutKamInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutKamInput>
  }

  export type AreaUpsertWithoutUsersInput = {
    update: XOR<AreaUpdateWithoutUsersInput, AreaUncheckedUpdateWithoutUsersInput>
    create: XOR<AreaCreateWithoutUsersInput, AreaUncheckedCreateWithoutUsersInput>
    where?: AreaWhereInput
  }

  export type AreaUpdateToOneWithWhereWithoutUsersInput = {
    where?: AreaWhereInput
    data: XOR<AreaUpdateWithoutUsersInput, AreaUncheckedUpdateWithoutUsersInput>
  }

  export type AreaUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: CityUpdateOneRequiredWithoutAreasNestedInput
    distributors?: DistributorUpdateManyWithoutAreaNestedInput
    orders?: OrderUpdateManyWithoutAreaNestedInput
    patients?: PatientUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    distributors?: DistributorUncheckedUpdateManyWithoutAreaNestedInput
    orders?: OrderUncheckedUpdateManyWithoutAreaNestedInput
    patients?: PatientUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type CityUpsertWithoutUsersInput = {
    update: XOR<CityUpdateWithoutUsersInput, CityUncheckedUpdateWithoutUsersInput>
    create: XOR<CityCreateWithoutUsersInput, CityUncheckedCreateWithoutUsersInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutUsersInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutUsersInput, CityUncheckedUpdateWithoutUsersInput>
  }

  export type CityUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    areas?: AreaUpdateManyWithoutCityNestedInput
    distributors?: DistributorUpdateManyWithoutCityNestedInput
    orders?: OrderUpdateManyWithoutCityNestedInput
    patients?: PatientUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    areas?: AreaUncheckedUpdateManyWithoutCityNestedInput
    distributors?: DistributorUncheckedUpdateManyWithoutCityNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCityNestedInput
    patients?: PatientUncheckedUpdateManyWithoutCityNestedInput
  }

  export type DistributorUpsertWithoutUsersInput = {
    update: XOR<DistributorUpdateWithoutUsersInput, DistributorUncheckedUpdateWithoutUsersInput>
    create: XOR<DistributorCreateWithoutUsersInput, DistributorUncheckedCreateWithoutUsersInput>
    where?: DistributorWhereInput
  }

  export type DistributorUpdateToOneWithWhereWithoutUsersInput = {
    where?: DistributorWhereInput
    data: XOR<DistributorUpdateWithoutUsersInput, DistributorUncheckedUpdateWithoutUsersInput>
  }

  export type DistributorUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    area?: AreaUpdateOneRequiredWithoutDistributorsNestedInput
    city?: CityUpdateOneRequiredWithoutDistributorsNestedInput
    inventory?: InventoryUpdateManyWithoutDistributorNestedInput
    orders?: OrderUpdateManyWithoutDistributorNestedInput
  }

  export type DistributorUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    areaId?: StringFieldUpdateOperationsInput | string
    inventory?: InventoryUncheckedUpdateManyWithoutDistributorNestedInput
    orders?: OrderUncheckedUpdateManyWithoutDistributorNestedInput
  }

  export type AreaCreateWithoutCityInput = {
    id?: string
    name: string
    distributors?: DistributorCreateNestedManyWithoutAreaInput
    orders?: OrderCreateNestedManyWithoutAreaInput
    patients?: PatientCreateNestedManyWithoutAreaInput
    users?: UserCreateNestedManyWithoutAreaInput
  }

  export type AreaUncheckedCreateWithoutCityInput = {
    id?: string
    name: string
    distributors?: DistributorUncheckedCreateNestedManyWithoutAreaInput
    orders?: OrderUncheckedCreateNestedManyWithoutAreaInput
    patients?: PatientUncheckedCreateNestedManyWithoutAreaInput
    users?: UserUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaCreateOrConnectWithoutCityInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutCityInput, AreaUncheckedCreateWithoutCityInput>
  }

  export type AreaCreateManyCityInputEnvelope = {
    data: AreaCreateManyCityInput | AreaCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type DistributorCreateWithoutCityInput = {
    id?: string
    name: string
    area: AreaCreateNestedOneWithoutDistributorsInput
    inventory?: InventoryCreateNestedManyWithoutDistributorInput
    orders?: OrderCreateNestedManyWithoutDistributorInput
    users?: UserCreateNestedManyWithoutDistributorInput
  }

  export type DistributorUncheckedCreateWithoutCityInput = {
    id?: string
    name: string
    areaId: string
    inventory?: InventoryUncheckedCreateNestedManyWithoutDistributorInput
    orders?: OrderUncheckedCreateNestedManyWithoutDistributorInput
    users?: UserUncheckedCreateNestedManyWithoutDistributorInput
  }

  export type DistributorCreateOrConnectWithoutCityInput = {
    where: DistributorWhereUniqueInput
    create: XOR<DistributorCreateWithoutCityInput, DistributorUncheckedCreateWithoutCityInput>
  }

  export type DistributorCreateManyCityInputEnvelope = {
    data: DistributorCreateManyCityInput | DistributorCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutCityInput = {
    id?: string
    status?: $Enums.OrderStatus
    doctorName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    area?: AreaCreateNestedOneWithoutOrdersInput
    createdBy: UserCreateNestedOneWithoutCreatedOrdersInput
    distributor?: DistributorCreateNestedOneWithoutOrdersInput
    kam?: UserCreateNestedOneWithoutOrdersAsKamInput
    patient: PatientCreateNestedOneWithoutOrdersInput
    postForm?: PostAdministrationFormCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutCityInput = {
    id?: string
    patientId: string
    kamId?: string | null
    distributorId?: string | null
    createdById: string
    status?: $Enums.OrderStatus
    doctorName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    areaId?: string | null
    postForm?: PostAdministrationFormUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutCityInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutCityInput, OrderUncheckedCreateWithoutCityInput>
  }

  export type OrderCreateManyCityInputEnvelope = {
    data: OrderCreateManyCityInput | OrderCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type PatientCreateWithoutCityInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutPatientInput
    area?: AreaCreateNestedOneWithoutPatientsInput
    postForms?: PostAdministrationFormCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutCityInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    address?: string | null
    areaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutPatientInput
    postForms?: PostAdministrationFormUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutCityInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutCityInput, PatientUncheckedCreateWithoutCityInput>
  }

  export type PatientCreateManyCityInputEnvelope = {
    data: PatientCreateManyCityInput | PatientCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCityInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    employeeCode?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdOrders?: OrderCreateNestedManyWithoutCreatedByInput
    ordersAsKam?: OrderCreateNestedManyWithoutKamInput
    area?: AreaCreateNestedOneWithoutUsersInput
    distributor?: DistributorCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutCityInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    employeeCode?: string | null
    phone?: string | null
    areaId?: string | null
    distributorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdOrders?: OrderUncheckedCreateNestedManyWithoutCreatedByInput
    ordersAsKam?: OrderUncheckedCreateNestedManyWithoutKamInput
  }

  export type UserCreateOrConnectWithoutCityInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCityInput, UserUncheckedCreateWithoutCityInput>
  }

  export type UserCreateManyCityInputEnvelope = {
    data: UserCreateManyCityInput | UserCreateManyCityInput[]
    skipDuplicates?: boolean
  }

  export type AreaUpsertWithWhereUniqueWithoutCityInput = {
    where: AreaWhereUniqueInput
    update: XOR<AreaUpdateWithoutCityInput, AreaUncheckedUpdateWithoutCityInput>
    create: XOR<AreaCreateWithoutCityInput, AreaUncheckedCreateWithoutCityInput>
  }

  export type AreaUpdateWithWhereUniqueWithoutCityInput = {
    where: AreaWhereUniqueInput
    data: XOR<AreaUpdateWithoutCityInput, AreaUncheckedUpdateWithoutCityInput>
  }

  export type AreaUpdateManyWithWhereWithoutCityInput = {
    where: AreaScalarWhereInput
    data: XOR<AreaUpdateManyMutationInput, AreaUncheckedUpdateManyWithoutCityInput>
  }

  export type AreaScalarWhereInput = {
    AND?: AreaScalarWhereInput | AreaScalarWhereInput[]
    OR?: AreaScalarWhereInput[]
    NOT?: AreaScalarWhereInput | AreaScalarWhereInput[]
    id?: StringFilter<"Area"> | string
    name?: StringFilter<"Area"> | string
    cityId?: StringFilter<"Area"> | string
  }

  export type DistributorUpsertWithWhereUniqueWithoutCityInput = {
    where: DistributorWhereUniqueInput
    update: XOR<DistributorUpdateWithoutCityInput, DistributorUncheckedUpdateWithoutCityInput>
    create: XOR<DistributorCreateWithoutCityInput, DistributorUncheckedCreateWithoutCityInput>
  }

  export type DistributorUpdateWithWhereUniqueWithoutCityInput = {
    where: DistributorWhereUniqueInput
    data: XOR<DistributorUpdateWithoutCityInput, DistributorUncheckedUpdateWithoutCityInput>
  }

  export type DistributorUpdateManyWithWhereWithoutCityInput = {
    where: DistributorScalarWhereInput
    data: XOR<DistributorUpdateManyMutationInput, DistributorUncheckedUpdateManyWithoutCityInput>
  }

  export type DistributorScalarWhereInput = {
    AND?: DistributorScalarWhereInput | DistributorScalarWhereInput[]
    OR?: DistributorScalarWhereInput[]
    NOT?: DistributorScalarWhereInput | DistributorScalarWhereInput[]
    id?: StringFilter<"Distributor"> | string
    name?: StringFilter<"Distributor"> | string
    cityId?: StringFilter<"Distributor"> | string
    areaId?: StringFilter<"Distributor"> | string
  }

  export type OrderUpsertWithWhereUniqueWithoutCityInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutCityInput, OrderUncheckedUpdateWithoutCityInput>
    create: XOR<OrderCreateWithoutCityInput, OrderUncheckedCreateWithoutCityInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutCityInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutCityInput, OrderUncheckedUpdateWithoutCityInput>
  }

  export type OrderUpdateManyWithWhereWithoutCityInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutCityInput>
  }

  export type PatientUpsertWithWhereUniqueWithoutCityInput = {
    where: PatientWhereUniqueInput
    update: XOR<PatientUpdateWithoutCityInput, PatientUncheckedUpdateWithoutCityInput>
    create: XOR<PatientCreateWithoutCityInput, PatientUncheckedCreateWithoutCityInput>
  }

  export type PatientUpdateWithWhereUniqueWithoutCityInput = {
    where: PatientWhereUniqueInput
    data: XOR<PatientUpdateWithoutCityInput, PatientUncheckedUpdateWithoutCityInput>
  }

  export type PatientUpdateManyWithWhereWithoutCityInput = {
    where: PatientScalarWhereInput
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyWithoutCityInput>
  }

  export type PatientScalarWhereInput = {
    AND?: PatientScalarWhereInput | PatientScalarWhereInput[]
    OR?: PatientScalarWhereInput[]
    NOT?: PatientScalarWhereInput | PatientScalarWhereInput[]
    id?: StringFilter<"Patient"> | string
    name?: StringFilter<"Patient"> | string
    phone?: StringFilter<"Patient"> | string
    email?: StringNullableFilter<"Patient"> | string | null
    address?: StringNullableFilter<"Patient"> | string | null
    cityId?: StringNullableFilter<"Patient"> | string | null
    areaId?: StringNullableFilter<"Patient"> | string | null
    createdAt?: DateTimeFilter<"Patient"> | Date | string
    updatedAt?: DateTimeFilter<"Patient"> | Date | string
  }

  export type UserUpsertWithWhereUniqueWithoutCityInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCityInput, UserUncheckedUpdateWithoutCityInput>
    create: XOR<UserCreateWithoutCityInput, UserUncheckedCreateWithoutCityInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCityInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCityInput, UserUncheckedUpdateWithoutCityInput>
  }

  export type UserUpdateManyWithWhereWithoutCityInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCityInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    employeeCode?: StringNullableFilter<"User"> | string | null
    phone?: StringNullableFilter<"User"> | string | null
    cityId?: StringNullableFilter<"User"> | string | null
    areaId?: StringNullableFilter<"User"> | string | null
    distributorId?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type CityCreateWithoutAreasInput = {
    id?: string
    name: string
    distributors?: DistributorCreateNestedManyWithoutCityInput
    orders?: OrderCreateNestedManyWithoutCityInput
    patients?: PatientCreateNestedManyWithoutCityInput
    users?: UserCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutAreasInput = {
    id?: string
    name: string
    distributors?: DistributorUncheckedCreateNestedManyWithoutCityInput
    orders?: OrderUncheckedCreateNestedManyWithoutCityInput
    patients?: PatientUncheckedCreateNestedManyWithoutCityInput
    users?: UserUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutAreasInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutAreasInput, CityUncheckedCreateWithoutAreasInput>
  }

  export type DistributorCreateWithoutAreaInput = {
    id?: string
    name: string
    city: CityCreateNestedOneWithoutDistributorsInput
    inventory?: InventoryCreateNestedManyWithoutDistributorInput
    orders?: OrderCreateNestedManyWithoutDistributorInput
    users?: UserCreateNestedManyWithoutDistributorInput
  }

  export type DistributorUncheckedCreateWithoutAreaInput = {
    id?: string
    name: string
    cityId: string
    inventory?: InventoryUncheckedCreateNestedManyWithoutDistributorInput
    orders?: OrderUncheckedCreateNestedManyWithoutDistributorInput
    users?: UserUncheckedCreateNestedManyWithoutDistributorInput
  }

  export type DistributorCreateOrConnectWithoutAreaInput = {
    where: DistributorWhereUniqueInput
    create: XOR<DistributorCreateWithoutAreaInput, DistributorUncheckedCreateWithoutAreaInput>
  }

  export type DistributorCreateManyAreaInputEnvelope = {
    data: DistributorCreateManyAreaInput | DistributorCreateManyAreaInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutAreaInput = {
    id?: string
    status?: $Enums.OrderStatus
    doctorName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    city: CityCreateNestedOneWithoutOrdersInput
    createdBy: UserCreateNestedOneWithoutCreatedOrdersInput
    distributor?: DistributorCreateNestedOneWithoutOrdersInput
    kam?: UserCreateNestedOneWithoutOrdersAsKamInput
    patient: PatientCreateNestedOneWithoutOrdersInput
    postForm?: PostAdministrationFormCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutAreaInput = {
    id?: string
    patientId: string
    kamId?: string | null
    distributorId?: string | null
    cityId: string
    createdById: string
    status?: $Enums.OrderStatus
    doctorName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    postForm?: PostAdministrationFormUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutAreaInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutAreaInput, OrderUncheckedCreateWithoutAreaInput>
  }

  export type OrderCreateManyAreaInputEnvelope = {
    data: OrderCreateManyAreaInput | OrderCreateManyAreaInput[]
    skipDuplicates?: boolean
  }

  export type PatientCreateWithoutAreaInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutPatientInput
    city?: CityCreateNestedOneWithoutPatientsInput
    postForms?: PostAdministrationFormCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutAreaInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    address?: string | null
    cityId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutPatientInput
    postForms?: PostAdministrationFormUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutAreaInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutAreaInput, PatientUncheckedCreateWithoutAreaInput>
  }

  export type PatientCreateManyAreaInputEnvelope = {
    data: PatientCreateManyAreaInput | PatientCreateManyAreaInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutAreaInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    employeeCode?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdOrders?: OrderCreateNestedManyWithoutCreatedByInput
    ordersAsKam?: OrderCreateNestedManyWithoutKamInput
    city?: CityCreateNestedOneWithoutUsersInput
    distributor?: DistributorCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutAreaInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    employeeCode?: string | null
    phone?: string | null
    cityId?: string | null
    distributorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdOrders?: OrderUncheckedCreateNestedManyWithoutCreatedByInput
    ordersAsKam?: OrderUncheckedCreateNestedManyWithoutKamInput
  }

  export type UserCreateOrConnectWithoutAreaInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAreaInput, UserUncheckedCreateWithoutAreaInput>
  }

  export type UserCreateManyAreaInputEnvelope = {
    data: UserCreateManyAreaInput | UserCreateManyAreaInput[]
    skipDuplicates?: boolean
  }

  export type CityUpsertWithoutAreasInput = {
    update: XOR<CityUpdateWithoutAreasInput, CityUncheckedUpdateWithoutAreasInput>
    create: XOR<CityCreateWithoutAreasInput, CityUncheckedCreateWithoutAreasInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutAreasInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutAreasInput, CityUncheckedUpdateWithoutAreasInput>
  }

  export type CityUpdateWithoutAreasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    distributors?: DistributorUpdateManyWithoutCityNestedInput
    orders?: OrderUpdateManyWithoutCityNestedInput
    patients?: PatientUpdateManyWithoutCityNestedInput
    users?: UserUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutAreasInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    distributors?: DistributorUncheckedUpdateManyWithoutCityNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCityNestedInput
    patients?: PatientUncheckedUpdateManyWithoutCityNestedInput
    users?: UserUncheckedUpdateManyWithoutCityNestedInput
  }

  export type DistributorUpsertWithWhereUniqueWithoutAreaInput = {
    where: DistributorWhereUniqueInput
    update: XOR<DistributorUpdateWithoutAreaInput, DistributorUncheckedUpdateWithoutAreaInput>
    create: XOR<DistributorCreateWithoutAreaInput, DistributorUncheckedCreateWithoutAreaInput>
  }

  export type DistributorUpdateWithWhereUniqueWithoutAreaInput = {
    where: DistributorWhereUniqueInput
    data: XOR<DistributorUpdateWithoutAreaInput, DistributorUncheckedUpdateWithoutAreaInput>
  }

  export type DistributorUpdateManyWithWhereWithoutAreaInput = {
    where: DistributorScalarWhereInput
    data: XOR<DistributorUpdateManyMutationInput, DistributorUncheckedUpdateManyWithoutAreaInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutAreaInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutAreaInput, OrderUncheckedUpdateWithoutAreaInput>
    create: XOR<OrderCreateWithoutAreaInput, OrderUncheckedCreateWithoutAreaInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutAreaInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutAreaInput, OrderUncheckedUpdateWithoutAreaInput>
  }

  export type OrderUpdateManyWithWhereWithoutAreaInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutAreaInput>
  }

  export type PatientUpsertWithWhereUniqueWithoutAreaInput = {
    where: PatientWhereUniqueInput
    update: XOR<PatientUpdateWithoutAreaInput, PatientUncheckedUpdateWithoutAreaInput>
    create: XOR<PatientCreateWithoutAreaInput, PatientUncheckedCreateWithoutAreaInput>
  }

  export type PatientUpdateWithWhereUniqueWithoutAreaInput = {
    where: PatientWhereUniqueInput
    data: XOR<PatientUpdateWithoutAreaInput, PatientUncheckedUpdateWithoutAreaInput>
  }

  export type PatientUpdateManyWithWhereWithoutAreaInput = {
    where: PatientScalarWhereInput
    data: XOR<PatientUpdateManyMutationInput, PatientUncheckedUpdateManyWithoutAreaInput>
  }

  export type UserUpsertWithWhereUniqueWithoutAreaInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutAreaInput, UserUncheckedUpdateWithoutAreaInput>
    create: XOR<UserCreateWithoutAreaInput, UserUncheckedCreateWithoutAreaInput>
  }

  export type UserUpdateWithWhereUniqueWithoutAreaInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutAreaInput, UserUncheckedUpdateWithoutAreaInput>
  }

  export type UserUpdateManyWithWhereWithoutAreaInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutAreaInput>
  }

  export type AreaCreateWithoutDistributorsInput = {
    id?: string
    name: string
    city: CityCreateNestedOneWithoutAreasInput
    orders?: OrderCreateNestedManyWithoutAreaInput
    patients?: PatientCreateNestedManyWithoutAreaInput
    users?: UserCreateNestedManyWithoutAreaInput
  }

  export type AreaUncheckedCreateWithoutDistributorsInput = {
    id?: string
    name: string
    cityId: string
    orders?: OrderUncheckedCreateNestedManyWithoutAreaInput
    patients?: PatientUncheckedCreateNestedManyWithoutAreaInput
    users?: UserUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaCreateOrConnectWithoutDistributorsInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutDistributorsInput, AreaUncheckedCreateWithoutDistributorsInput>
  }

  export type CityCreateWithoutDistributorsInput = {
    id?: string
    name: string
    areas?: AreaCreateNestedManyWithoutCityInput
    orders?: OrderCreateNestedManyWithoutCityInput
    patients?: PatientCreateNestedManyWithoutCityInput
    users?: UserCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutDistributorsInput = {
    id?: string
    name: string
    areas?: AreaUncheckedCreateNestedManyWithoutCityInput
    orders?: OrderUncheckedCreateNestedManyWithoutCityInput
    patients?: PatientUncheckedCreateNestedManyWithoutCityInput
    users?: UserUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutDistributorsInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutDistributorsInput, CityUncheckedCreateWithoutDistributorsInput>
  }

  export type InventoryCreateWithoutDistributorInput = {
    id?: string
    totalStock?: number
    allocatedStock?: number
    availableStock?: number
    lastUpdated?: Date | string
  }

  export type InventoryUncheckedCreateWithoutDistributorInput = {
    id?: string
    totalStock?: number
    allocatedStock?: number
    availableStock?: number
    lastUpdated?: Date | string
  }

  export type InventoryCreateOrConnectWithoutDistributorInput = {
    where: InventoryWhereUniqueInput
    create: XOR<InventoryCreateWithoutDistributorInput, InventoryUncheckedCreateWithoutDistributorInput>
  }

  export type InventoryCreateManyDistributorInputEnvelope = {
    data: InventoryCreateManyDistributorInput | InventoryCreateManyDistributorInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutDistributorInput = {
    id?: string
    status?: $Enums.OrderStatus
    doctorName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    area?: AreaCreateNestedOneWithoutOrdersInput
    city: CityCreateNestedOneWithoutOrdersInput
    createdBy: UserCreateNestedOneWithoutCreatedOrdersInput
    kam?: UserCreateNestedOneWithoutOrdersAsKamInput
    patient: PatientCreateNestedOneWithoutOrdersInput
    postForm?: PostAdministrationFormCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutDistributorInput = {
    id?: string
    patientId: string
    kamId?: string | null
    cityId: string
    createdById: string
    status?: $Enums.OrderStatus
    doctorName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    areaId?: string | null
    postForm?: PostAdministrationFormUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutDistributorInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutDistributorInput, OrderUncheckedCreateWithoutDistributorInput>
  }

  export type OrderCreateManyDistributorInputEnvelope = {
    data: OrderCreateManyDistributorInput | OrderCreateManyDistributorInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutDistributorInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    employeeCode?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdOrders?: OrderCreateNestedManyWithoutCreatedByInput
    ordersAsKam?: OrderCreateNestedManyWithoutKamInput
    area?: AreaCreateNestedOneWithoutUsersInput
    city?: CityCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutDistributorInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    employeeCode?: string | null
    phone?: string | null
    cityId?: string | null
    areaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdOrders?: OrderUncheckedCreateNestedManyWithoutCreatedByInput
    ordersAsKam?: OrderUncheckedCreateNestedManyWithoutKamInput
  }

  export type UserCreateOrConnectWithoutDistributorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDistributorInput, UserUncheckedCreateWithoutDistributorInput>
  }

  export type UserCreateManyDistributorInputEnvelope = {
    data: UserCreateManyDistributorInput | UserCreateManyDistributorInput[]
    skipDuplicates?: boolean
  }

  export type AreaUpsertWithoutDistributorsInput = {
    update: XOR<AreaUpdateWithoutDistributorsInput, AreaUncheckedUpdateWithoutDistributorsInput>
    create: XOR<AreaCreateWithoutDistributorsInput, AreaUncheckedCreateWithoutDistributorsInput>
    where?: AreaWhereInput
  }

  export type AreaUpdateToOneWithWhereWithoutDistributorsInput = {
    where?: AreaWhereInput
    data: XOR<AreaUpdateWithoutDistributorsInput, AreaUncheckedUpdateWithoutDistributorsInput>
  }

  export type AreaUpdateWithoutDistributorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: CityUpdateOneRequiredWithoutAreasNestedInput
    orders?: OrderUpdateManyWithoutAreaNestedInput
    patients?: PatientUpdateManyWithoutAreaNestedInput
    users?: UserUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateWithoutDistributorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    orders?: OrderUncheckedUpdateManyWithoutAreaNestedInput
    patients?: PatientUncheckedUpdateManyWithoutAreaNestedInput
    users?: UserUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type CityUpsertWithoutDistributorsInput = {
    update: XOR<CityUpdateWithoutDistributorsInput, CityUncheckedUpdateWithoutDistributorsInput>
    create: XOR<CityCreateWithoutDistributorsInput, CityUncheckedCreateWithoutDistributorsInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutDistributorsInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutDistributorsInput, CityUncheckedUpdateWithoutDistributorsInput>
  }

  export type CityUpdateWithoutDistributorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    areas?: AreaUpdateManyWithoutCityNestedInput
    orders?: OrderUpdateManyWithoutCityNestedInput
    patients?: PatientUpdateManyWithoutCityNestedInput
    users?: UserUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutDistributorsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    areas?: AreaUncheckedUpdateManyWithoutCityNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCityNestedInput
    patients?: PatientUncheckedUpdateManyWithoutCityNestedInput
    users?: UserUncheckedUpdateManyWithoutCityNestedInput
  }

  export type InventoryUpsertWithWhereUniqueWithoutDistributorInput = {
    where: InventoryWhereUniqueInput
    update: XOR<InventoryUpdateWithoutDistributorInput, InventoryUncheckedUpdateWithoutDistributorInput>
    create: XOR<InventoryCreateWithoutDistributorInput, InventoryUncheckedCreateWithoutDistributorInput>
  }

  export type InventoryUpdateWithWhereUniqueWithoutDistributorInput = {
    where: InventoryWhereUniqueInput
    data: XOR<InventoryUpdateWithoutDistributorInput, InventoryUncheckedUpdateWithoutDistributorInput>
  }

  export type InventoryUpdateManyWithWhereWithoutDistributorInput = {
    where: InventoryScalarWhereInput
    data: XOR<InventoryUpdateManyMutationInput, InventoryUncheckedUpdateManyWithoutDistributorInput>
  }

  export type InventoryScalarWhereInput = {
    AND?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
    OR?: InventoryScalarWhereInput[]
    NOT?: InventoryScalarWhereInput | InventoryScalarWhereInput[]
    id?: StringFilter<"Inventory"> | string
    distributorId?: StringFilter<"Inventory"> | string
    totalStock?: IntFilter<"Inventory"> | number
    allocatedStock?: IntFilter<"Inventory"> | number
    availableStock?: IntFilter<"Inventory"> | number
    lastUpdated?: DateTimeFilter<"Inventory"> | Date | string
  }

  export type OrderUpsertWithWhereUniqueWithoutDistributorInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutDistributorInput, OrderUncheckedUpdateWithoutDistributorInput>
    create: XOR<OrderCreateWithoutDistributorInput, OrderUncheckedCreateWithoutDistributorInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutDistributorInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutDistributorInput, OrderUncheckedUpdateWithoutDistributorInput>
  }

  export type OrderUpdateManyWithWhereWithoutDistributorInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutDistributorInput>
  }

  export type UserUpsertWithWhereUniqueWithoutDistributorInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutDistributorInput, UserUncheckedUpdateWithoutDistributorInput>
    create: XOR<UserCreateWithoutDistributorInput, UserUncheckedCreateWithoutDistributorInput>
  }

  export type UserUpdateWithWhereUniqueWithoutDistributorInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutDistributorInput, UserUncheckedUpdateWithoutDistributorInput>
  }

  export type UserUpdateManyWithWhereWithoutDistributorInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutDistributorInput>
  }

  export type OrderCreateWithoutPatientInput = {
    id?: string
    status?: $Enums.OrderStatus
    doctorName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    area?: AreaCreateNestedOneWithoutOrdersInput
    city: CityCreateNestedOneWithoutOrdersInput
    createdBy: UserCreateNestedOneWithoutCreatedOrdersInput
    distributor?: DistributorCreateNestedOneWithoutOrdersInput
    kam?: UserCreateNestedOneWithoutOrdersAsKamInput
    postForm?: PostAdministrationFormCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutPatientInput = {
    id?: string
    kamId?: string | null
    distributorId?: string | null
    cityId: string
    createdById: string
    status?: $Enums.OrderStatus
    doctorName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    areaId?: string | null
    postForm?: PostAdministrationFormUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutPatientInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutPatientInput, OrderUncheckedCreateWithoutPatientInput>
  }

  export type OrderCreateManyPatientInputEnvelope = {
    data: OrderCreateManyPatientInput | OrderCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type AreaCreateWithoutPatientsInput = {
    id?: string
    name: string
    city: CityCreateNestedOneWithoutAreasInput
    distributors?: DistributorCreateNestedManyWithoutAreaInput
    orders?: OrderCreateNestedManyWithoutAreaInput
    users?: UserCreateNestedManyWithoutAreaInput
  }

  export type AreaUncheckedCreateWithoutPatientsInput = {
    id?: string
    name: string
    cityId: string
    distributors?: DistributorUncheckedCreateNestedManyWithoutAreaInput
    orders?: OrderUncheckedCreateNestedManyWithoutAreaInput
    users?: UserUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaCreateOrConnectWithoutPatientsInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutPatientsInput, AreaUncheckedCreateWithoutPatientsInput>
  }

  export type CityCreateWithoutPatientsInput = {
    id?: string
    name: string
    areas?: AreaCreateNestedManyWithoutCityInput
    distributors?: DistributorCreateNestedManyWithoutCityInput
    orders?: OrderCreateNestedManyWithoutCityInput
    users?: UserCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutPatientsInput = {
    id?: string
    name: string
    areas?: AreaUncheckedCreateNestedManyWithoutCityInput
    distributors?: DistributorUncheckedCreateNestedManyWithoutCityInput
    orders?: OrderUncheckedCreateNestedManyWithoutCityInput
    users?: UserUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutPatientsInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutPatientsInput, CityUncheckedCreateWithoutPatientsInput>
  }

  export type PostAdministrationFormCreateWithoutPatientInput = {
    id?: string
    kamName: string
    kamEmployeeCode: string
    region?: string | null
    city: string
    area: string
    referredBy?: string | null
    referralCode?: string | null
    referralTeam?: string | null
    doctorName: string
    doctorCode: string
    serviceProvider: string
    patientName: string
    patientArea: string
    sensorInstalledBy: string
    visitDate: Date | string
    visitTime: string
    numberOfDevices: number
    patientEmail?: string | null
    patientWhatsApp: string
    firstActivationDate?: Date | string | null
    comments?: string | null
    serialNumber?: string | null
    reminder?: boolean
    createdAt?: Date | string
    order: OrderCreateNestedOneWithoutPostFormInput
  }

  export type PostAdministrationFormUncheckedCreateWithoutPatientInput = {
    id?: string
    orderId: string
    kamName: string
    kamEmployeeCode: string
    region?: string | null
    city: string
    area: string
    referredBy?: string | null
    referralCode?: string | null
    referralTeam?: string | null
    doctorName: string
    doctorCode: string
    serviceProvider: string
    patientName: string
    patientArea: string
    sensorInstalledBy: string
    visitDate: Date | string
    visitTime: string
    numberOfDevices: number
    patientEmail?: string | null
    patientWhatsApp: string
    firstActivationDate?: Date | string | null
    comments?: string | null
    serialNumber?: string | null
    reminder?: boolean
    createdAt?: Date | string
  }

  export type PostAdministrationFormCreateOrConnectWithoutPatientInput = {
    where: PostAdministrationFormWhereUniqueInput
    create: XOR<PostAdministrationFormCreateWithoutPatientInput, PostAdministrationFormUncheckedCreateWithoutPatientInput>
  }

  export type PostAdministrationFormCreateManyPatientInputEnvelope = {
    data: PostAdministrationFormCreateManyPatientInput | PostAdministrationFormCreateManyPatientInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithWhereUniqueWithoutPatientInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutPatientInput, OrderUncheckedUpdateWithoutPatientInput>
    create: XOR<OrderCreateWithoutPatientInput, OrderUncheckedCreateWithoutPatientInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutPatientInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutPatientInput, OrderUncheckedUpdateWithoutPatientInput>
  }

  export type OrderUpdateManyWithWhereWithoutPatientInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutPatientInput>
  }

  export type AreaUpsertWithoutPatientsInput = {
    update: XOR<AreaUpdateWithoutPatientsInput, AreaUncheckedUpdateWithoutPatientsInput>
    create: XOR<AreaCreateWithoutPatientsInput, AreaUncheckedCreateWithoutPatientsInput>
    where?: AreaWhereInput
  }

  export type AreaUpdateToOneWithWhereWithoutPatientsInput = {
    where?: AreaWhereInput
    data: XOR<AreaUpdateWithoutPatientsInput, AreaUncheckedUpdateWithoutPatientsInput>
  }

  export type AreaUpdateWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: CityUpdateOneRequiredWithoutAreasNestedInput
    distributors?: DistributorUpdateManyWithoutAreaNestedInput
    orders?: OrderUpdateManyWithoutAreaNestedInput
    users?: UserUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    distributors?: DistributorUncheckedUpdateManyWithoutAreaNestedInput
    orders?: OrderUncheckedUpdateManyWithoutAreaNestedInput
    users?: UserUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type CityUpsertWithoutPatientsInput = {
    update: XOR<CityUpdateWithoutPatientsInput, CityUncheckedUpdateWithoutPatientsInput>
    create: XOR<CityCreateWithoutPatientsInput, CityUncheckedCreateWithoutPatientsInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutPatientsInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutPatientsInput, CityUncheckedUpdateWithoutPatientsInput>
  }

  export type CityUpdateWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    areas?: AreaUpdateManyWithoutCityNestedInput
    distributors?: DistributorUpdateManyWithoutCityNestedInput
    orders?: OrderUpdateManyWithoutCityNestedInput
    users?: UserUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutPatientsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    areas?: AreaUncheckedUpdateManyWithoutCityNestedInput
    distributors?: DistributorUncheckedUpdateManyWithoutCityNestedInput
    orders?: OrderUncheckedUpdateManyWithoutCityNestedInput
    users?: UserUncheckedUpdateManyWithoutCityNestedInput
  }

  export type PostAdministrationFormUpsertWithWhereUniqueWithoutPatientInput = {
    where: PostAdministrationFormWhereUniqueInput
    update: XOR<PostAdministrationFormUpdateWithoutPatientInput, PostAdministrationFormUncheckedUpdateWithoutPatientInput>
    create: XOR<PostAdministrationFormCreateWithoutPatientInput, PostAdministrationFormUncheckedCreateWithoutPatientInput>
  }

  export type PostAdministrationFormUpdateWithWhereUniqueWithoutPatientInput = {
    where: PostAdministrationFormWhereUniqueInput
    data: XOR<PostAdministrationFormUpdateWithoutPatientInput, PostAdministrationFormUncheckedUpdateWithoutPatientInput>
  }

  export type PostAdministrationFormUpdateManyWithWhereWithoutPatientInput = {
    where: PostAdministrationFormScalarWhereInput
    data: XOR<PostAdministrationFormUpdateManyMutationInput, PostAdministrationFormUncheckedUpdateManyWithoutPatientInput>
  }

  export type PostAdministrationFormScalarWhereInput = {
    AND?: PostAdministrationFormScalarWhereInput | PostAdministrationFormScalarWhereInput[]
    OR?: PostAdministrationFormScalarWhereInput[]
    NOT?: PostAdministrationFormScalarWhereInput | PostAdministrationFormScalarWhereInput[]
    id?: StringFilter<"PostAdministrationForm"> | string
    orderId?: StringFilter<"PostAdministrationForm"> | string
    patientId?: StringFilter<"PostAdministrationForm"> | string
    kamName?: StringFilter<"PostAdministrationForm"> | string
    kamEmployeeCode?: StringFilter<"PostAdministrationForm"> | string
    region?: StringNullableFilter<"PostAdministrationForm"> | string | null
    city?: StringFilter<"PostAdministrationForm"> | string
    area?: StringFilter<"PostAdministrationForm"> | string
    referredBy?: StringNullableFilter<"PostAdministrationForm"> | string | null
    referralCode?: StringNullableFilter<"PostAdministrationForm"> | string | null
    referralTeam?: StringNullableFilter<"PostAdministrationForm"> | string | null
    doctorName?: StringFilter<"PostAdministrationForm"> | string
    doctorCode?: StringFilter<"PostAdministrationForm"> | string
    serviceProvider?: StringFilter<"PostAdministrationForm"> | string
    patientName?: StringFilter<"PostAdministrationForm"> | string
    patientArea?: StringFilter<"PostAdministrationForm"> | string
    sensorInstalledBy?: StringFilter<"PostAdministrationForm"> | string
    visitDate?: DateTimeFilter<"PostAdministrationForm"> | Date | string
    visitTime?: StringFilter<"PostAdministrationForm"> | string
    numberOfDevices?: IntFilter<"PostAdministrationForm"> | number
    patientEmail?: StringNullableFilter<"PostAdministrationForm"> | string | null
    patientWhatsApp?: StringFilter<"PostAdministrationForm"> | string
    firstActivationDate?: DateTimeNullableFilter<"PostAdministrationForm"> | Date | string | null
    comments?: StringNullableFilter<"PostAdministrationForm"> | string | null
    serialNumber?: StringNullableFilter<"PostAdministrationForm"> | string | null
    reminder?: BoolFilter<"PostAdministrationForm"> | boolean
    createdAt?: DateTimeFilter<"PostAdministrationForm"> | Date | string
  }

  export type AreaCreateWithoutOrdersInput = {
    id?: string
    name: string
    city: CityCreateNestedOneWithoutAreasInput
    distributors?: DistributorCreateNestedManyWithoutAreaInput
    patients?: PatientCreateNestedManyWithoutAreaInput
    users?: UserCreateNestedManyWithoutAreaInput
  }

  export type AreaUncheckedCreateWithoutOrdersInput = {
    id?: string
    name: string
    cityId: string
    distributors?: DistributorUncheckedCreateNestedManyWithoutAreaInput
    patients?: PatientUncheckedCreateNestedManyWithoutAreaInput
    users?: UserUncheckedCreateNestedManyWithoutAreaInput
  }

  export type AreaCreateOrConnectWithoutOrdersInput = {
    where: AreaWhereUniqueInput
    create: XOR<AreaCreateWithoutOrdersInput, AreaUncheckedCreateWithoutOrdersInput>
  }

  export type CityCreateWithoutOrdersInput = {
    id?: string
    name: string
    areas?: AreaCreateNestedManyWithoutCityInput
    distributors?: DistributorCreateNestedManyWithoutCityInput
    patients?: PatientCreateNestedManyWithoutCityInput
    users?: UserCreateNestedManyWithoutCityInput
  }

  export type CityUncheckedCreateWithoutOrdersInput = {
    id?: string
    name: string
    areas?: AreaUncheckedCreateNestedManyWithoutCityInput
    distributors?: DistributorUncheckedCreateNestedManyWithoutCityInput
    patients?: PatientUncheckedCreateNestedManyWithoutCityInput
    users?: UserUncheckedCreateNestedManyWithoutCityInput
  }

  export type CityCreateOrConnectWithoutOrdersInput = {
    where: CityWhereUniqueInput
    create: XOR<CityCreateWithoutOrdersInput, CityUncheckedCreateWithoutOrdersInput>
  }

  export type UserCreateWithoutCreatedOrdersInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    employeeCode?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ordersAsKam?: OrderCreateNestedManyWithoutKamInput
    area?: AreaCreateNestedOneWithoutUsersInput
    city?: CityCreateNestedOneWithoutUsersInput
    distributor?: DistributorCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutCreatedOrdersInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    employeeCode?: string | null
    phone?: string | null
    cityId?: string | null
    areaId?: string | null
    distributorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    ordersAsKam?: OrderUncheckedCreateNestedManyWithoutKamInput
  }

  export type UserCreateOrConnectWithoutCreatedOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedOrdersInput, UserUncheckedCreateWithoutCreatedOrdersInput>
  }

  export type DistributorCreateWithoutOrdersInput = {
    id?: string
    name: string
    area: AreaCreateNestedOneWithoutDistributorsInput
    city: CityCreateNestedOneWithoutDistributorsInput
    inventory?: InventoryCreateNestedManyWithoutDistributorInput
    users?: UserCreateNestedManyWithoutDistributorInput
  }

  export type DistributorUncheckedCreateWithoutOrdersInput = {
    id?: string
    name: string
    cityId: string
    areaId: string
    inventory?: InventoryUncheckedCreateNestedManyWithoutDistributorInput
    users?: UserUncheckedCreateNestedManyWithoutDistributorInput
  }

  export type DistributorCreateOrConnectWithoutOrdersInput = {
    where: DistributorWhereUniqueInput
    create: XOR<DistributorCreateWithoutOrdersInput, DistributorUncheckedCreateWithoutOrdersInput>
  }

  export type UserCreateWithoutOrdersAsKamInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    employeeCode?: string | null
    phone?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdOrders?: OrderCreateNestedManyWithoutCreatedByInput
    area?: AreaCreateNestedOneWithoutUsersInput
    city?: CityCreateNestedOneWithoutUsersInput
    distributor?: DistributorCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutOrdersAsKamInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    employeeCode?: string | null
    phone?: string | null
    cityId?: string | null
    areaId?: string | null
    distributorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    createdOrders?: OrderUncheckedCreateNestedManyWithoutCreatedByInput
  }

  export type UserCreateOrConnectWithoutOrdersAsKamInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrdersAsKamInput, UserUncheckedCreateWithoutOrdersAsKamInput>
  }

  export type PatientCreateWithoutOrdersInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    area?: AreaCreateNestedOneWithoutPatientsInput
    city?: CityCreateNestedOneWithoutPatientsInput
    postForms?: PostAdministrationFormCreateNestedManyWithoutPatientInput
  }

  export type PatientUncheckedCreateWithoutOrdersInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    address?: string | null
    cityId?: string | null
    areaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    postForms?: PostAdministrationFormUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutOrdersInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutOrdersInput, PatientUncheckedCreateWithoutOrdersInput>
  }

  export type PostAdministrationFormCreateWithoutOrderInput = {
    id?: string
    kamName: string
    kamEmployeeCode: string
    region?: string | null
    city: string
    area: string
    referredBy?: string | null
    referralCode?: string | null
    referralTeam?: string | null
    doctorName: string
    doctorCode: string
    serviceProvider: string
    patientName: string
    patientArea: string
    sensorInstalledBy: string
    visitDate: Date | string
    visitTime: string
    numberOfDevices: number
    patientEmail?: string | null
    patientWhatsApp: string
    firstActivationDate?: Date | string | null
    comments?: string | null
    serialNumber?: string | null
    reminder?: boolean
    createdAt?: Date | string
    patient: PatientCreateNestedOneWithoutPostFormsInput
  }

  export type PostAdministrationFormUncheckedCreateWithoutOrderInput = {
    id?: string
    patientId: string
    kamName: string
    kamEmployeeCode: string
    region?: string | null
    city: string
    area: string
    referredBy?: string | null
    referralCode?: string | null
    referralTeam?: string | null
    doctorName: string
    doctorCode: string
    serviceProvider: string
    patientName: string
    patientArea: string
    sensorInstalledBy: string
    visitDate: Date | string
    visitTime: string
    numberOfDevices: number
    patientEmail?: string | null
    patientWhatsApp: string
    firstActivationDate?: Date | string | null
    comments?: string | null
    serialNumber?: string | null
    reminder?: boolean
    createdAt?: Date | string
  }

  export type PostAdministrationFormCreateOrConnectWithoutOrderInput = {
    where: PostAdministrationFormWhereUniqueInput
    create: XOR<PostAdministrationFormCreateWithoutOrderInput, PostAdministrationFormUncheckedCreateWithoutOrderInput>
  }

  export type AreaUpsertWithoutOrdersInput = {
    update: XOR<AreaUpdateWithoutOrdersInput, AreaUncheckedUpdateWithoutOrdersInput>
    create: XOR<AreaCreateWithoutOrdersInput, AreaUncheckedCreateWithoutOrdersInput>
    where?: AreaWhereInput
  }

  export type AreaUpdateToOneWithWhereWithoutOrdersInput = {
    where?: AreaWhereInput
    data: XOR<AreaUpdateWithoutOrdersInput, AreaUncheckedUpdateWithoutOrdersInput>
  }

  export type AreaUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: CityUpdateOneRequiredWithoutAreasNestedInput
    distributors?: DistributorUpdateManyWithoutAreaNestedInput
    patients?: PatientUpdateManyWithoutAreaNestedInput
    users?: UserUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    distributors?: DistributorUncheckedUpdateManyWithoutAreaNestedInput
    patients?: PatientUncheckedUpdateManyWithoutAreaNestedInput
    users?: UserUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type CityUpsertWithoutOrdersInput = {
    update: XOR<CityUpdateWithoutOrdersInput, CityUncheckedUpdateWithoutOrdersInput>
    create: XOR<CityCreateWithoutOrdersInput, CityUncheckedCreateWithoutOrdersInput>
    where?: CityWhereInput
  }

  export type CityUpdateToOneWithWhereWithoutOrdersInput = {
    where?: CityWhereInput
    data: XOR<CityUpdateWithoutOrdersInput, CityUncheckedUpdateWithoutOrdersInput>
  }

  export type CityUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    areas?: AreaUpdateManyWithoutCityNestedInput
    distributors?: DistributorUpdateManyWithoutCityNestedInput
    patients?: PatientUpdateManyWithoutCityNestedInput
    users?: UserUpdateManyWithoutCityNestedInput
  }

  export type CityUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    areas?: AreaUncheckedUpdateManyWithoutCityNestedInput
    distributors?: DistributorUncheckedUpdateManyWithoutCityNestedInput
    patients?: PatientUncheckedUpdateManyWithoutCityNestedInput
    users?: UserUncheckedUpdateManyWithoutCityNestedInput
  }

  export type UserUpsertWithoutCreatedOrdersInput = {
    update: XOR<UserUpdateWithoutCreatedOrdersInput, UserUncheckedUpdateWithoutCreatedOrdersInput>
    create: XOR<UserCreateWithoutCreatedOrdersInput, UserUncheckedCreateWithoutCreatedOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedOrdersInput, UserUncheckedUpdateWithoutCreatedOrdersInput>
  }

  export type UserUpdateWithoutCreatedOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ordersAsKam?: OrderUpdateManyWithoutKamNestedInput
    area?: AreaUpdateOneWithoutUsersNestedInput
    city?: CityUpdateOneWithoutUsersNestedInput
    distributor?: DistributorUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    distributorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ordersAsKam?: OrderUncheckedUpdateManyWithoutKamNestedInput
  }

  export type DistributorUpsertWithoutOrdersInput = {
    update: XOR<DistributorUpdateWithoutOrdersInput, DistributorUncheckedUpdateWithoutOrdersInput>
    create: XOR<DistributorCreateWithoutOrdersInput, DistributorUncheckedCreateWithoutOrdersInput>
    where?: DistributorWhereInput
  }

  export type DistributorUpdateToOneWithWhereWithoutOrdersInput = {
    where?: DistributorWhereInput
    data: XOR<DistributorUpdateWithoutOrdersInput, DistributorUncheckedUpdateWithoutOrdersInput>
  }

  export type DistributorUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    area?: AreaUpdateOneRequiredWithoutDistributorsNestedInput
    city?: CityUpdateOneRequiredWithoutDistributorsNestedInput
    inventory?: InventoryUpdateManyWithoutDistributorNestedInput
    users?: UserUpdateManyWithoutDistributorNestedInput
  }

  export type DistributorUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    areaId?: StringFieldUpdateOperationsInput | string
    inventory?: InventoryUncheckedUpdateManyWithoutDistributorNestedInput
    users?: UserUncheckedUpdateManyWithoutDistributorNestedInput
  }

  export type UserUpsertWithoutOrdersAsKamInput = {
    update: XOR<UserUpdateWithoutOrdersAsKamInput, UserUncheckedUpdateWithoutOrdersAsKamInput>
    create: XOR<UserCreateWithoutOrdersAsKamInput, UserUncheckedCreateWithoutOrdersAsKamInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrdersAsKamInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrdersAsKamInput, UserUncheckedUpdateWithoutOrdersAsKamInput>
  }

  export type UserUpdateWithoutOrdersAsKamInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOrders?: OrderUpdateManyWithoutCreatedByNestedInput
    area?: AreaUpdateOneWithoutUsersNestedInput
    city?: CityUpdateOneWithoutUsersNestedInput
    distributor?: DistributorUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutOrdersAsKamInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    distributorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOrders?: OrderUncheckedUpdateManyWithoutCreatedByNestedInput
  }

  export type PatientUpsertWithoutOrdersInput = {
    update: XOR<PatientUpdateWithoutOrdersInput, PatientUncheckedUpdateWithoutOrdersInput>
    create: XOR<PatientCreateWithoutOrdersInput, PatientUncheckedCreateWithoutOrdersInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutOrdersInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutOrdersInput, PatientUncheckedUpdateWithoutOrdersInput>
  }

  export type PatientUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    area?: AreaUpdateOneWithoutPatientsNestedInput
    city?: CityUpdateOneWithoutPatientsNestedInput
    postForms?: PostAdministrationFormUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postForms?: PostAdministrationFormUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PostAdministrationFormUpsertWithoutOrderInput = {
    update: XOR<PostAdministrationFormUpdateWithoutOrderInput, PostAdministrationFormUncheckedUpdateWithoutOrderInput>
    create: XOR<PostAdministrationFormCreateWithoutOrderInput, PostAdministrationFormUncheckedCreateWithoutOrderInput>
    where?: PostAdministrationFormWhereInput
  }

  export type PostAdministrationFormUpdateToOneWithWhereWithoutOrderInput = {
    where?: PostAdministrationFormWhereInput
    data: XOR<PostAdministrationFormUpdateWithoutOrderInput, PostAdministrationFormUncheckedUpdateWithoutOrderInput>
  }

  export type PostAdministrationFormUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    kamName?: StringFieldUpdateOperationsInput | string
    kamEmployeeCode?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referralTeam?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: StringFieldUpdateOperationsInput | string
    doctorCode?: StringFieldUpdateOperationsInput | string
    serviceProvider?: StringFieldUpdateOperationsInput | string
    patientName?: StringFieldUpdateOperationsInput | string
    patientArea?: StringFieldUpdateOperationsInput | string
    sensorInstalledBy?: StringFieldUpdateOperationsInput | string
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitTime?: StringFieldUpdateOperationsInput | string
    numberOfDevices?: IntFieldUpdateOperationsInput | number
    patientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    patientWhatsApp?: StringFieldUpdateOperationsInput | string
    firstActivationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    reminder?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    patient?: PatientUpdateOneRequiredWithoutPostFormsNestedInput
  }

  export type PostAdministrationFormUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    kamName?: StringFieldUpdateOperationsInput | string
    kamEmployeeCode?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referralTeam?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: StringFieldUpdateOperationsInput | string
    doctorCode?: StringFieldUpdateOperationsInput | string
    serviceProvider?: StringFieldUpdateOperationsInput | string
    patientName?: StringFieldUpdateOperationsInput | string
    patientArea?: StringFieldUpdateOperationsInput | string
    sensorInstalledBy?: StringFieldUpdateOperationsInput | string
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitTime?: StringFieldUpdateOperationsInput | string
    numberOfDevices?: IntFieldUpdateOperationsInput | number
    patientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    patientWhatsApp?: StringFieldUpdateOperationsInput | string
    firstActivationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    reminder?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateWithoutPostFormInput = {
    id?: string
    status?: $Enums.OrderStatus
    doctorName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    area?: AreaCreateNestedOneWithoutOrdersInput
    city: CityCreateNestedOneWithoutOrdersInput
    createdBy: UserCreateNestedOneWithoutCreatedOrdersInput
    distributor?: DistributorCreateNestedOneWithoutOrdersInput
    kam?: UserCreateNestedOneWithoutOrdersAsKamInput
    patient: PatientCreateNestedOneWithoutOrdersInput
  }

  export type OrderUncheckedCreateWithoutPostFormInput = {
    id?: string
    patientId: string
    kamId?: string | null
    distributorId?: string | null
    cityId: string
    createdById: string
    status?: $Enums.OrderStatus
    doctorName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    areaId?: string | null
  }

  export type OrderCreateOrConnectWithoutPostFormInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutPostFormInput, OrderUncheckedCreateWithoutPostFormInput>
  }

  export type PatientCreateWithoutPostFormsInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    address?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutPatientInput
    area?: AreaCreateNestedOneWithoutPatientsInput
    city?: CityCreateNestedOneWithoutPatientsInput
  }

  export type PatientUncheckedCreateWithoutPostFormsInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    address?: string | null
    cityId?: string | null
    areaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutPatientInput
  }

  export type PatientCreateOrConnectWithoutPostFormsInput = {
    where: PatientWhereUniqueInput
    create: XOR<PatientCreateWithoutPostFormsInput, PatientUncheckedCreateWithoutPostFormsInput>
  }

  export type OrderUpsertWithoutPostFormInput = {
    update: XOR<OrderUpdateWithoutPostFormInput, OrderUncheckedUpdateWithoutPostFormInput>
    create: XOR<OrderCreateWithoutPostFormInput, OrderUncheckedCreateWithoutPostFormInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutPostFormInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutPostFormInput, OrderUncheckedUpdateWithoutPostFormInput>
  }

  export type OrderUpdateWithoutPostFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    area?: AreaUpdateOneWithoutOrdersNestedInput
    city?: CityUpdateOneRequiredWithoutOrdersNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedOrdersNestedInput
    distributor?: DistributorUpdateOneWithoutOrdersNestedInput
    kam?: UserUpdateOneWithoutOrdersAsKamNestedInput
    patient?: PatientUpdateOneRequiredWithoutOrdersNestedInput
  }

  export type OrderUncheckedUpdateWithoutPostFormInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    kamId?: NullableStringFieldUpdateOperationsInput | string | null
    distributorId?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PatientUpsertWithoutPostFormsInput = {
    update: XOR<PatientUpdateWithoutPostFormsInput, PatientUncheckedUpdateWithoutPostFormsInput>
    create: XOR<PatientCreateWithoutPostFormsInput, PatientUncheckedCreateWithoutPostFormsInput>
    where?: PatientWhereInput
  }

  export type PatientUpdateToOneWithWhereWithoutPostFormsInput = {
    where?: PatientWhereInput
    data: XOR<PatientUpdateWithoutPostFormsInput, PatientUncheckedUpdateWithoutPostFormsInput>
  }

  export type PatientUpdateWithoutPostFormsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutPatientNestedInput
    area?: AreaUpdateOneWithoutPatientsNestedInput
    city?: CityUpdateOneWithoutPatientsNestedInput
  }

  export type PatientUncheckedUpdateWithoutPostFormsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type DistributorCreateWithoutInventoryInput = {
    id?: string
    name: string
    area: AreaCreateNestedOneWithoutDistributorsInput
    city: CityCreateNestedOneWithoutDistributorsInput
    orders?: OrderCreateNestedManyWithoutDistributorInput
    users?: UserCreateNestedManyWithoutDistributorInput
  }

  export type DistributorUncheckedCreateWithoutInventoryInput = {
    id?: string
    name: string
    cityId: string
    areaId: string
    orders?: OrderUncheckedCreateNestedManyWithoutDistributorInput
    users?: UserUncheckedCreateNestedManyWithoutDistributorInput
  }

  export type DistributorCreateOrConnectWithoutInventoryInput = {
    where: DistributorWhereUniqueInput
    create: XOR<DistributorCreateWithoutInventoryInput, DistributorUncheckedCreateWithoutInventoryInput>
  }

  export type DistributorUpsertWithoutInventoryInput = {
    update: XOR<DistributorUpdateWithoutInventoryInput, DistributorUncheckedUpdateWithoutInventoryInput>
    create: XOR<DistributorCreateWithoutInventoryInput, DistributorUncheckedCreateWithoutInventoryInput>
    where?: DistributorWhereInput
  }

  export type DistributorUpdateToOneWithWhereWithoutInventoryInput = {
    where?: DistributorWhereInput
    data: XOR<DistributorUpdateWithoutInventoryInput, DistributorUncheckedUpdateWithoutInventoryInput>
  }

  export type DistributorUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    area?: AreaUpdateOneRequiredWithoutDistributorsNestedInput
    city?: CityUpdateOneRequiredWithoutDistributorsNestedInput
    orders?: OrderUpdateManyWithoutDistributorNestedInput
    users?: UserUpdateManyWithoutDistributorNestedInput
  }

  export type DistributorUncheckedUpdateWithoutInventoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    areaId?: StringFieldUpdateOperationsInput | string
    orders?: OrderUncheckedUpdateManyWithoutDistributorNestedInput
    users?: UserUncheckedUpdateManyWithoutDistributorNestedInput
  }

  export type OrderCreateManyCreatedByInput = {
    id?: string
    patientId: string
    kamId?: string | null
    distributorId?: string | null
    cityId: string
    status?: $Enums.OrderStatus
    doctorName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    areaId?: string | null
  }

  export type OrderCreateManyKamInput = {
    id?: string
    patientId: string
    distributorId?: string | null
    cityId: string
    createdById: string
    status?: $Enums.OrderStatus
    doctorName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    areaId?: string | null
  }

  export type OrderUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    area?: AreaUpdateOneWithoutOrdersNestedInput
    city?: CityUpdateOneRequiredWithoutOrdersNestedInput
    distributor?: DistributorUpdateOneWithoutOrdersNestedInput
    kam?: UserUpdateOneWithoutOrdersAsKamNestedInput
    patient?: PatientUpdateOneRequiredWithoutOrdersNestedInput
    postForm?: PostAdministrationFormUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    kamId?: NullableStringFieldUpdateOperationsInput | string | null
    distributorId?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    postForm?: PostAdministrationFormUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    kamId?: NullableStringFieldUpdateOperationsInput | string | null
    distributorId?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderUpdateWithoutKamInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    area?: AreaUpdateOneWithoutOrdersNestedInput
    city?: CityUpdateOneRequiredWithoutOrdersNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedOrdersNestedInput
    distributor?: DistributorUpdateOneWithoutOrdersNestedInput
    patient?: PatientUpdateOneRequiredWithoutOrdersNestedInput
    postForm?: PostAdministrationFormUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutKamInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    distributorId?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    postForm?: PostAdministrationFormUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutKamInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    distributorId?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AreaCreateManyCityInput = {
    id?: string
    name: string
  }

  export type DistributorCreateManyCityInput = {
    id?: string
    name: string
    areaId: string
  }

  export type OrderCreateManyCityInput = {
    id?: string
    patientId: string
    kamId?: string | null
    distributorId?: string | null
    createdById: string
    status?: $Enums.OrderStatus
    doctorName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    areaId?: string | null
  }

  export type PatientCreateManyCityInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    address?: string | null
    areaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateManyCityInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    employeeCode?: string | null
    phone?: string | null
    areaId?: string | null
    distributorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AreaUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    distributors?: DistributorUpdateManyWithoutAreaNestedInput
    orders?: OrderUpdateManyWithoutAreaNestedInput
    patients?: PatientUpdateManyWithoutAreaNestedInput
    users?: UserUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    distributors?: DistributorUncheckedUpdateManyWithoutAreaNestedInput
    orders?: OrderUncheckedUpdateManyWithoutAreaNestedInput
    patients?: PatientUncheckedUpdateManyWithoutAreaNestedInput
    users?: UserUncheckedUpdateManyWithoutAreaNestedInput
  }

  export type AreaUncheckedUpdateManyWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type DistributorUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    area?: AreaUpdateOneRequiredWithoutDistributorsNestedInput
    inventory?: InventoryUpdateManyWithoutDistributorNestedInput
    orders?: OrderUpdateManyWithoutDistributorNestedInput
    users?: UserUpdateManyWithoutDistributorNestedInput
  }

  export type DistributorUncheckedUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    areaId?: StringFieldUpdateOperationsInput | string
    inventory?: InventoryUncheckedUpdateManyWithoutDistributorNestedInput
    orders?: OrderUncheckedUpdateManyWithoutDistributorNestedInput
    users?: UserUncheckedUpdateManyWithoutDistributorNestedInput
  }

  export type DistributorUncheckedUpdateManyWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    areaId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    area?: AreaUpdateOneWithoutOrdersNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedOrdersNestedInput
    distributor?: DistributorUpdateOneWithoutOrdersNestedInput
    kam?: UserUpdateOneWithoutOrdersAsKamNestedInput
    patient?: PatientUpdateOneRequiredWithoutOrdersNestedInput
    postForm?: PostAdministrationFormUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    kamId?: NullableStringFieldUpdateOperationsInput | string | null
    distributorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    postForm?: PostAdministrationFormUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    kamId?: NullableStringFieldUpdateOperationsInput | string | null
    distributorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PatientUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutPatientNestedInput
    area?: AreaUpdateOneWithoutPatientsNestedInput
    postForms?: PostAdministrationFormUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutPatientNestedInput
    postForms?: PostAdministrationFormUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateManyWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOrders?: OrderUpdateManyWithoutCreatedByNestedInput
    ordersAsKam?: OrderUpdateManyWithoutKamNestedInput
    area?: AreaUpdateOneWithoutUsersNestedInput
    distributor?: DistributorUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    distributorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOrders?: OrderUncheckedUpdateManyWithoutCreatedByNestedInput
    ordersAsKam?: OrderUncheckedUpdateManyWithoutKamNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCityInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    distributorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DistributorCreateManyAreaInput = {
    id?: string
    name: string
    cityId: string
  }

  export type OrderCreateManyAreaInput = {
    id?: string
    patientId: string
    kamId?: string | null
    distributorId?: string | null
    cityId: string
    createdById: string
    status?: $Enums.OrderStatus
    doctorName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PatientCreateManyAreaInput = {
    id?: string
    name: string
    phone: string
    email?: string | null
    address?: string | null
    cityId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateManyAreaInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    employeeCode?: string | null
    phone?: string | null
    cityId?: string | null
    distributorId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DistributorUpdateWithoutAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    city?: CityUpdateOneRequiredWithoutDistributorsNestedInput
    inventory?: InventoryUpdateManyWithoutDistributorNestedInput
    orders?: OrderUpdateManyWithoutDistributorNestedInput
    users?: UserUpdateManyWithoutDistributorNestedInput
  }

  export type DistributorUncheckedUpdateWithoutAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
    inventory?: InventoryUncheckedUpdateManyWithoutDistributorNestedInput
    orders?: OrderUncheckedUpdateManyWithoutDistributorNestedInput
    users?: UserUncheckedUpdateManyWithoutDistributorNestedInput
  }

  export type DistributorUncheckedUpdateManyWithoutAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    cityId?: StringFieldUpdateOperationsInput | string
  }

  export type OrderUpdateWithoutAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    city?: CityUpdateOneRequiredWithoutOrdersNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedOrdersNestedInput
    distributor?: DistributorUpdateOneWithoutOrdersNestedInput
    kam?: UserUpdateOneWithoutOrdersAsKamNestedInput
    patient?: PatientUpdateOneRequiredWithoutOrdersNestedInput
    postForm?: PostAdministrationFormUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    kamId?: NullableStringFieldUpdateOperationsInput | string | null
    distributorId?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    postForm?: PostAdministrationFormUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    kamId?: NullableStringFieldUpdateOperationsInput | string | null
    distributorId?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PatientUpdateWithoutAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutPatientNestedInput
    city?: CityUpdateOneWithoutPatientsNestedInput
    postForms?: PostAdministrationFormUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateWithoutAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutPatientNestedInput
    postForms?: PostAdministrationFormUncheckedUpdateManyWithoutPatientNestedInput
  }

  export type PatientUncheckedUpdateManyWithoutAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOrders?: OrderUpdateManyWithoutCreatedByNestedInput
    ordersAsKam?: OrderUpdateManyWithoutKamNestedInput
    city?: CityUpdateOneWithoutUsersNestedInput
    distributor?: DistributorUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: NullableStringFieldUpdateOperationsInput | string | null
    distributorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOrders?: OrderUncheckedUpdateManyWithoutCreatedByNestedInput
    ordersAsKam?: OrderUncheckedUpdateManyWithoutKamNestedInput
  }

  export type UserUncheckedUpdateManyWithoutAreaInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: NullableStringFieldUpdateOperationsInput | string | null
    distributorId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryCreateManyDistributorInput = {
    id?: string
    totalStock?: number
    allocatedStock?: number
    availableStock?: number
    lastUpdated?: Date | string
  }

  export type OrderCreateManyDistributorInput = {
    id?: string
    patientId: string
    kamId?: string | null
    cityId: string
    createdById: string
    status?: $Enums.OrderStatus
    doctorName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    areaId?: string | null
  }

  export type UserCreateManyDistributorInput = {
    id?: string
    email: string
    password: string
    name: string
    role?: $Enums.Role
    employeeCode?: string | null
    phone?: string | null
    cityId?: string | null
    areaId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type InventoryUpdateWithoutDistributorInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalStock?: IntFieldUpdateOperationsInput | number
    allocatedStock?: IntFieldUpdateOperationsInput | number
    availableStock?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryUncheckedUpdateWithoutDistributorInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalStock?: IntFieldUpdateOperationsInput | number
    allocatedStock?: IntFieldUpdateOperationsInput | number
    availableStock?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type InventoryUncheckedUpdateManyWithoutDistributorInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalStock?: IntFieldUpdateOperationsInput | number
    allocatedStock?: IntFieldUpdateOperationsInput | number
    availableStock?: IntFieldUpdateOperationsInput | number
    lastUpdated?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutDistributorInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    area?: AreaUpdateOneWithoutOrdersNestedInput
    city?: CityUpdateOneRequiredWithoutOrdersNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedOrdersNestedInput
    kam?: UserUpdateOneWithoutOrdersAsKamNestedInput
    patient?: PatientUpdateOneRequiredWithoutOrdersNestedInput
    postForm?: PostAdministrationFormUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutDistributorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    kamId?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    postForm?: PostAdministrationFormUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutDistributorInput = {
    id?: StringFieldUpdateOperationsInput | string
    patientId?: StringFieldUpdateOperationsInput | string
    kamId?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpdateWithoutDistributorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOrders?: OrderUpdateManyWithoutCreatedByNestedInput
    ordersAsKam?: OrderUpdateManyWithoutKamNestedInput
    area?: AreaUpdateOneWithoutUsersNestedInput
    city?: CityUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutDistributorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOrders?: OrderUncheckedUpdateManyWithoutCreatedByNestedInput
    ordersAsKam?: OrderUncheckedUpdateManyWithoutKamNestedInput
  }

  export type UserUncheckedUpdateManyWithoutDistributorInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: NullableStringFieldUpdateOperationsInput | string | null
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderCreateManyPatientInput = {
    id?: string
    kamId?: string | null
    distributorId?: string | null
    cityId: string
    createdById: string
    status?: $Enums.OrderStatus
    doctorName?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    areaId?: string | null
  }

  export type PostAdministrationFormCreateManyPatientInput = {
    id?: string
    orderId: string
    kamName: string
    kamEmployeeCode: string
    region?: string | null
    city: string
    area: string
    referredBy?: string | null
    referralCode?: string | null
    referralTeam?: string | null
    doctorName: string
    doctorCode: string
    serviceProvider: string
    patientName: string
    patientArea: string
    sensorInstalledBy: string
    visitDate: Date | string
    visitTime: string
    numberOfDevices: number
    patientEmail?: string | null
    patientWhatsApp: string
    firstActivationDate?: Date | string | null
    comments?: string | null
    serialNumber?: string | null
    reminder?: boolean
    createdAt?: Date | string
  }

  export type OrderUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    area?: AreaUpdateOneWithoutOrdersNestedInput
    city?: CityUpdateOneRequiredWithoutOrdersNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedOrdersNestedInput
    distributor?: DistributorUpdateOneWithoutOrdersNestedInput
    kam?: UserUpdateOneWithoutOrdersAsKamNestedInput
    postForm?: PostAdministrationFormUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    kamId?: NullableStringFieldUpdateOperationsInput | string | null
    distributorId?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
    postForm?: PostAdministrationFormUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    kamId?: NullableStringFieldUpdateOperationsInput | string | null
    distributorId?: NullableStringFieldUpdateOperationsInput | string | null
    cityId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    doctorName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    areaId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PostAdministrationFormUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    kamName?: StringFieldUpdateOperationsInput | string
    kamEmployeeCode?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referralTeam?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: StringFieldUpdateOperationsInput | string
    doctorCode?: StringFieldUpdateOperationsInput | string
    serviceProvider?: StringFieldUpdateOperationsInput | string
    patientName?: StringFieldUpdateOperationsInput | string
    patientArea?: StringFieldUpdateOperationsInput | string
    sensorInstalledBy?: StringFieldUpdateOperationsInput | string
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitTime?: StringFieldUpdateOperationsInput | string
    numberOfDevices?: IntFieldUpdateOperationsInput | number
    patientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    patientWhatsApp?: StringFieldUpdateOperationsInput | string
    firstActivationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    reminder?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutPostFormNestedInput
  }

  export type PostAdministrationFormUncheckedUpdateWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    kamName?: StringFieldUpdateOperationsInput | string
    kamEmployeeCode?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referralTeam?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: StringFieldUpdateOperationsInput | string
    doctorCode?: StringFieldUpdateOperationsInput | string
    serviceProvider?: StringFieldUpdateOperationsInput | string
    patientName?: StringFieldUpdateOperationsInput | string
    patientArea?: StringFieldUpdateOperationsInput | string
    sensorInstalledBy?: StringFieldUpdateOperationsInput | string
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitTime?: StringFieldUpdateOperationsInput | string
    numberOfDevices?: IntFieldUpdateOperationsInput | number
    patientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    patientWhatsApp?: StringFieldUpdateOperationsInput | string
    firstActivationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    reminder?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PostAdministrationFormUncheckedUpdateManyWithoutPatientInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    kamName?: StringFieldUpdateOperationsInput | string
    kamEmployeeCode?: StringFieldUpdateOperationsInput | string
    region?: NullableStringFieldUpdateOperationsInput | string | null
    city?: StringFieldUpdateOperationsInput | string
    area?: StringFieldUpdateOperationsInput | string
    referredBy?: NullableStringFieldUpdateOperationsInput | string | null
    referralCode?: NullableStringFieldUpdateOperationsInput | string | null
    referralTeam?: NullableStringFieldUpdateOperationsInput | string | null
    doctorName?: StringFieldUpdateOperationsInput | string
    doctorCode?: StringFieldUpdateOperationsInput | string
    serviceProvider?: StringFieldUpdateOperationsInput | string
    patientName?: StringFieldUpdateOperationsInput | string
    patientArea?: StringFieldUpdateOperationsInput | string
    sensorInstalledBy?: StringFieldUpdateOperationsInput | string
    visitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    visitTime?: StringFieldUpdateOperationsInput | string
    numberOfDevices?: IntFieldUpdateOperationsInput | number
    patientEmail?: NullableStringFieldUpdateOperationsInput | string | null
    patientWhatsApp?: StringFieldUpdateOperationsInput | string
    firstActivationDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    comments?: NullableStringFieldUpdateOperationsInput | string | null
    serialNumber?: NullableStringFieldUpdateOperationsInput | string | null
    reminder?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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