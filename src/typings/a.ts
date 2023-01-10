// const REACT_STATICS = {
//   childContextTypes: true,
//   contextType: true,
//   contextTypes: true,
//   defaultProps: true,
//   displayName: true,
//   getDefaultProps: true,
//   getDerivedStateFromError: true,
//   getDerivedStateFromProps: true,
//   mixins: true,
//   propTypes: true,
//   type: true,
// };
// /**
//  * Object.getOwnPropertyNames - 返回的是对象所有自己的属性
//  * @param NewComponent
//  * @param OldComponent
//  * @returns
//  * https://blog.csdn.net/sinat_36246371/article/details/88064877
//  * 属性描述符 - https://blog.csdn.net/tashanhongye/article/details/74157070
//  */
// function testHoistNonReactStatics<
//   N extends React.ComponentType<any>,
//   O extends React.ComponentType<any>
// >(NewComponent: N, OldComponent: O): N & O {
//   const keys = Object.getOwnPropertyNames(OldComponent); // ['xxx','defaultProps','displayName']
//   for (let i = 0; i < keys.length; i++) {
//     const key = keys[i];
//     if (!REACT_STATICS[key]) {
//       const descriptor = Object.getOwnPropertyDescriptor(
//         OldComponent,
//         key
//       ) as PropertyDescriptor;
//       Object.defineProperty(NewComponent, key, descriptor);
//     }
//   }
//   return NewComponent as N & O;
// }

// class NewComponent extends React.Component {
//   static age1: number;
// }
// class OldComponent extends React.Component {
//   static age2: number;
// }

// const demo = testHoistNonReactStatics<typeof NewComponent, typeof OldComponent>(
//   NewComponent,
//   OldComponent
// );
// console.log(demo.age1);
// console.log(demo.age2);
