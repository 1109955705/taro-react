import errorBoundaryHoc from './error-boundary-hoc'
import themeColorHoc from './them-color-hoc'

export default defaultComponent => errorBoundaryHoc(themeColorHoc(defaultComponent))
