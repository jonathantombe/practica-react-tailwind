import React, {useState} from 'react'

export const Calculator = () => {
    const [values, setValues] = useState({ num1: '', num2: '' });
    const [result, setResult] = useState(null);

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    const calculate = (operacion) => {
        const { num1, num2 } = values;
        const [number1, number2] = [parseFloat(num1), parseFloat(num2)]
        if (isNaN(number1) || isNaN(number2)) return;

        const operations = {
            add: (a, b) => a + b,
            subtract: (a, b) => a - b,
            multiply: (a, b) => a * b,
            divide: (a, b) => a / b,
        };

        setResult(operations[operacion](number1, number2));
    };
    
  return (
      <div className='container-page'>
          <h2 className='title-page'>Calculator</h2>

          <input type="number" name='num1' placeholder='Número 1' value={values.num1} onChange={handleChange} className='border p-2 mr-2' />
          <input type="number" name='num2' placeholder='Número 2' value={values.num2} onChange={handleChange} className='border p-2' />
          <div className='mt-4'>
              {['add', 'sustract', 'multiply', 'divide'].map((operation) => (
                  <button key={operation} onClick={() => calculate(operation)} className='bg-blue-500 text-white px-4 py-2 m-2' >
                      {operation.charAt(0).toUpperCase() + operation.slice(1)}
                  </button>
              ))}
              
          </div>
          {result != null && <h2 className='mt-4 text-2xl'>Resultado: { result}</h2>}
      </div>
  )
}
