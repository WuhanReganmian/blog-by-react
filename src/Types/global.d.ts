// 接口返回值基本类型
declare interface ApiRes<T> {
  code: string;
  message: string | null;
  result: T;
}

// 路由页面面包屑
interface BreadV {
  name: string;
  href?: string;
}
declare interface P {
  bread(_: BreadV[]): any;
}

declare interface Iterate<T> {
  [_: T]: any
}

declare interface ColumnV {
  title: string;
  key: any;
  dataIndex?: string;
  render?: (a: any, b: any, c: any) => any;
}
