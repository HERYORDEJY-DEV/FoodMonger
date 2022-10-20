declare namespace NodeJS {
  interface Global {
    logger: (params: any) => void;
  }
}
