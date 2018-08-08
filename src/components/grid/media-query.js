// 这个顺序很重要，必须从大到小
export const breakpointMap = {
  xxl: '(min-width: 1600px)',
  xl: '(min-width: 1200px)',
  lg: '(min-width: 992px)',
  md: '(min-width: 768px)',
  sm: '(min-width: 576px)',
  xs: '(max-width: 576px)'
}

export const breakpoints = Object.keys(breakpointMap)
