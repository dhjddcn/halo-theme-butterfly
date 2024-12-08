/**
 * @date: 2024/12/8
 * @author: 小红
 * @fileName: index
 * @Description: 工具
 */

/**
 * 判断白天还是夜晚
 * @returns {boolean}
 */
export function useIsDaytime(): boolean {
  const now = new Date();
  const currentHour = now.getHours();

  // 定义白天和夜晚的时间范围（可以根据需要调整）
  const daytimeStartHour = 6; // 早上6点
  const daytimeEndHour = 18; // 晚上6点

  // 判断当前小时是否在白天时间范围内
  return currentHour >= daytimeStartHour && currentHour < daytimeEndHour;
}
