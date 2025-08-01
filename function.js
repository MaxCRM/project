window.function = async function (inputs) {
  console.log("Function called with inputs:", inputs);

  let input_number_value;

  if (inputs && inputs.input_number && typeof inputs.input_number.value !== 'undefined') {
    input_number_value = parseFloat(inputs.input_number.value);
  } else {
    input_number_value = parseFloat(inputs);
  }

  if (isNaN(input_number_value)) {
    console.error("Input is not a valid number:", inputs);
    return null;
  }

  const result = input_number_value * 2;
  console.log("Calculated result:", result);
  return result;
};