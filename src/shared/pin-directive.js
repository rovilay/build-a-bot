export default function (element, binding) {
  const { value } = binding;
  Object.keys(value).forEach((position) => {
    element.style[position] = value[position];
  });
  element.style.position = 'absolute';
}
