getuser:::  FindCursor {
  _events: [Object: null prototype] {
    error: [Function: noop],
    close: [Function: bound onceWrapper] {
      listener: [Function: removeActiveCursor]
    }
  },
  _eventsCount: 2,
  _maxListeners: undefined,
  documents: null,
  hasEmittedClose: false,
  cursorClient: <ref *1> MongoClient {
    _events: [Object: null prototype] { error: [Function: noop] },
    _eventsCount: 1,
    _maxListeners: undefined,
    options: [Object: null prototype] {
      hosts: [Array],
      autoSelectFamily: true,
      compressors: [Array],
      connectTimeoutMS: 30000,
      directConnection: false,
      driverInfo: {},
      enableUtf8Validation: true,
      forceServerObjectId: false,
      heartbeatFrequencyMS: 10000,
      loadBalanced: false,
      localThresholdMS: 15,
      maxConnecting: 2,
      maxIdleTimeMS: 0,
      maxPoolSize: 100,
      minPoolSize: 0,
      minHeartbeatFrequencyMS: 500,
      monitorCommands: false,
      noDelay: true,
      pkFactory: [Object],
      raw: false,
      readPreference: [ReadPreference],
      retryReads: true,
      retryWrites: true,
      serverMonitoringMode: 'auto',
      serverSelectionTimeoutMS: 30000,
      socketTimeoutMS: 0,
      srvMaxHosts: 0,
      srvServiceName: 'mongodb',
      waitQueueTimeoutMS: 0,
      zlibCompressionLevel: 0,
      dbName: 'test',
      userSpecifiedAuthSource: false,
      userSpecifiedReplicaSet: false,
      mongoLoggerOptions: [Object],
      additionalDriverInfo: [],
      metadata: [Object],
      extendedMetadata: [Promise]
    },
    mongoLogger: undefined,
    s: {
      url: 'mongodb://127.0.0.1:27017',
      bsonOptions: [Object],
      namespace: [MongoDBNamespace],
      hasBeenClosed: false,
      sessionPool: [ServerSessionPool],
      activeSessions: Set(0) {},
      activeCursors: [Set],
      authProviders: [MongoClientAuthProviders],
      options: [Getter],
      readConcern: [Getter],
      writeConcern: [Getter],
      readPreference: [Getter],
      isMongoClient: [Getter]
    },
    topology: Topology {
      _events: [Object: null prototype],
      _eventsCount: 26,
      _maxListeners: undefined,
      client: [Circular *1],
      waitQueue: [List],
      s: [Object],
      mongoLogger: undefined,
      component: 'topology',
      connectionLock: undefined,
      [Symbol(kCapture)]: false
    },
    connectionLock: undefined,
    [Symbol(kCapture)]: false
  },
  cursorNamespace: MongoDBCollectionNamespace {
    db: 'Form_Data',
    collection: 'newusers'
  },
  cursorId: null,
  initialized: false,
  isClosed: false,
  isKilled: false,
  cursorOptions: {
    readPreference: ReadPreference {
      mode: 'primary',
      tags: undefined,
      hedge: undefined,
      maxStalenessSeconds: undefined,
      minWireVersion: undefined
    },
    fieldsAsRaw: {},
    useBigInt64: false,
    promoteValues: true,
    promoteBuffers: false,
    promoteLongs: true,
    serializeFunctions: false,
    ignoreUndefined: false,
    bsonRegExp: false,
    raw: false,
    enableUtf8Validation: true,
    timeoutMS: undefined,
    tailable: undefined,
    awaitData: undefined,
    omitMaxTimeMS: false
  },
  cursorSession: null,
  deserializationOptions: {
    readPreference: ReadPreference {
      mode: 'primary',
      tags: undefined,
      hedge: undefined,
      maxStalenessSeconds: undefined,
      minWireVersion: undefined
    },
    fieldsAsRaw: {},
    useBigInt64: false,
    promoteValues: true,
    promoteBuffers: false,
    promoteLongs: true,
    serializeFunctions: false,
    ignoreUndefined: false,
    bsonRegExp: false,
    raw: false,
    enableUtf8Validation: true,
    timeoutMS: undefined,
    tailable: undefined,
    awaitData: undefined,
    omitMaxTimeMS: false,
    validation: { utf8: true }
  },
  timeoutContext: undefined,
  signal: undefined,
  abortListener: undefined,
  numReturned: 0,
  cursorFilter: {},
  findOptions: {
    raw: false,
    useBigInt64: false,
    promoteLongs: true,
    promoteValues: true,
    promoteBuffers: false,
    ignoreUndefined: false,
    bsonRegExp: false,
    serializeFunctions: false,
    fieldsAsRaw: {},
    enableUtf8Validation: true,
    timeoutMS: undefined,
    readPreference: ReadPreference {
      mode: 'primary',
      tags: undefined,
      hedge: undefined,
      maxStalenessSeconds: undefined,
      minWireVersion: undefined
    }
  },
  [Symbol(kCapture)]: false
}
TypeError: Converting circular structure to JSON
    --> starting at object with constructor 'MongoClient'
    |     property 's' -> object with constructor 'Object'
    |     property 'sessionPool' -> object with constructor 'ServerSessionPool'
    --- property 'client' closes the circle
    at JSON.stringify (<anonymous>)
    at stringify (C:\Users\ABSA00284\program\Node.js\Tutorial\node_modules\express\lib\response.js:1020:12)        
    at ServerResponse.json (C:\Users\ABSA00284\program\Node.js\Tutorial\node_modules\express\lib\response.js:243:14
)
    --- property 'client' closes the circle
    at JSON.stringify (<anonymous>)
    at stringify (C:\Users\ABSA00284\program\Node.js\Tutorial\node_modules\express\lib\response.js:1020:12)        
    at ServerResponse.json (C:\Users\ABSA00284\program\Node.js\Tutorial\node_modules\express\lib\response.js:243:14
    --- property 'client' closes the circle
    at JSON.stringify (<anonymous>)
    at stringify (C:\Users\ABSA00284\program\Node.js\Tutorial\node_modules\express\lib\response.js:1020:12)        
    --- property 'client' closes the circle
    at JSON.stringify (<anonymous>)
    --- property 'client' closes the circle
    --- property 'client' closes the circle
    --- property 'client' closes the circle
    at JSON.stringify (<anonymous>)
    at stringify (C:\Users\ABSA00284\program\Node.js\Tutorial\node_modules\express\lib\response.js:1020:12)        
    at ServerResponse.json (C:\Users\ABSA00284\program\Node.js\Tutorial\node_modules\express\lib\response.js:243:14
)
    at C:\Users\ABSA00284\program\Node.js\Tutorial\vuejs\form\backend\server.js:45:7
    at process.processTicksAndRejections (node:internal/process/task_queues:95:5)