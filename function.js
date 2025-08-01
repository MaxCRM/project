window.function = async function (inputs) {
  // Добавляем логи, чтобы видеть, что происходит
  console.log("Function called.");
  console.log("Received inputs:", inputs);

  // Проверяем, какой тип данных пришел.
  // Glide может передать либо объект с полем input_number, либо просто число.
  let input_number_value;

  if (typeof inputs === 'object' && inputs !== null && 'input_number' in inputs) {
    // Если Glide передал объект, берем значение из поля input_number
    input_number_value = parseFloat(inputs.input_number);
    console.log("Input is an object. Parsed value:", input_number_value);
  } else {
    // Если Glide передал просто число, используем его напрямую
    input_number_value = parseFloat(inputs);
    console.log("Input is a number. Parsed value:", input_number_value);
  }

  // Проверка на NaN (Not a Number)
  if (isNaN(input_number_value)) {
    console.error("Input is not a valid number:", inputs);
    return null;
  }

  // Основная логика: возведение в квадрат
  const result = input_number_value * input_number_value;
  console.log("Calculated result:", result);

  return result;
};