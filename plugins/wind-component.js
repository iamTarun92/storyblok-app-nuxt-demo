export default ({ app }, inject) => {
  inject('wind', {
    links: {
      base: {
        warning:
          'flex active:text-yellow-700 font-medium text-yellow-600 hover:text-yellow-800 transition duration-150 ease-in-out h-full',
        primary:
          'flex active:text-primary-700 font-medium text-primary-600 hover:text-primary-800 transition duration-150 ease-in-out h-full',
        danger:
          'flex active:text-danger-500 font-medium text-danger-500 hover:text-danger-600 transition duration-150 ease-in-out h-full',
      },
    },
    buttons: {
      base: {
        blank: '',
        primary:
          'bg-blue-900 font-medium hover:bg-transparent hover:text-black hover:border-2 hover:border-black inline-block px-6 py-3 rounded-3xl text-sm text-white transition',
        primaryInverted:
          'shadow-md w-full my-auto flex justify-center py-2 px-2 border text-sm font-medium rounded-md transition duration-150 ease-in-out w-full inline-flex justify-center py-2 px-4 border border-primary-300 rounded-md bg-white text-sm font-medium text-primary-500 hover:text-primary-400 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue transition duration-150 ease-in-out',
      },
    },
  })
}
