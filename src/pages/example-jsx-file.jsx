import * as React from "react"
import PropTypes from 'prop-types'

const ExampleEnumPositions = {
  'left': 'left',
  'right': 'right'
}
// markup
const ExampleJSXComponent = () => {
  return (
    <div>
      hello
    </div>
  )
}

ExampleJSXComponent.propTypes = {
  /**
    * Description of boolean
    */
  exampleBoolean: PropTypes.bool,
  /**
    * Description of enum
    */
  exampleEnum: PropTypes.oneOf(Object.values(ExampleEnumPositions)),
  /**
  * Description of example function prop
  * @param  {ExampleParameterType} exampleParameterName - example parameter description
  * @param  {AnotherExampleParameterType} anotherExampleParameterName - another example parameter description
  * @returns {ExampleReturnValueType} - return value description
  */
  exampleFunction: PropTypes.func.isRequired,
  /**
   * Description of example function prop
   * @param  {ExampleParameterType2} exampleParameterName - example parameter description
   * @param  {Object} exampleObjectParameter - example object parameter description
   * @param {string} exampleObjectParameter.property1 - property 1 on example object parameter
   * @param {string} exampleObjectParameter.property2 - property 2 on example object parameter
   * @param {boolean} exampleObjectParameter.property3 - property 3 on example object parameter
   * @param {Object} exampleObjectParameter.property4 - property 4 on example object parameter
   * @param {string} exampleObjectParameter.property4.subproperty1 - subproperty 1 on example object parameter
   * @param {boolean} exampleObjectParameter.property4.subproperty2 - subproperty 2 on example object parameter
   * @returns {ExampleReturnValueType} - return value description
   */
  exampleFunction2: PropTypes.func.isRequired,
  /**
    * Description of string
    */
  exampleString: PropTypes.string,
}

export default ExampleJSXComponent
