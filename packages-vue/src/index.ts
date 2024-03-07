/**
 *  不用 webpack 是因为 要配置各种东西，嫌弃麻烦
 * ╭━━━━━━━━━━━━━━━╮
 * ┃不推荐使用 Vue  ┃
 * ╰━━━━━━━━━━━━━━━╯
 * 类型维护两份！！！
 */
import 'element-plus/dist/index.css';
import 'micro-style/root.css';
import './style';

export {
    createContext,
    useContext,
    useEventListener,
    useLocationQuery,
    useService
} from './hooks';

export type {
    ButtonType,
    ButtonOpsType
} from './button';

export {
    Button,
    ButtonOps
} from './button';

export {
    Input
} from './input';

export {
    Icon
} from './icon';

export {
    directiveDraggable
} from './directives';

export {
    Table,
    Column
} from './table';

export { default as errorHandler } from './error-handler';
