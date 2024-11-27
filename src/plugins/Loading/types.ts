/**
 * @date: 2024/11/27
 * @author: 小红
 * @fileName: Loading types
 * @Description:类型
 */

export type LoadingType = 'circle' | 'hourglass' | 'cross_line' | 'dot';

export abstract class AbstractLoading {
  abstract destroy(): void;
}
