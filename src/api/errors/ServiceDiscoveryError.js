class ServiceDiscoveryError extends Error {
  constructor (...args) {
    if (args) {
      super(...args)
      this.message = args[0]
    }
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ServiceDiscoveryError)
    }
    this.message =
      'Our service discovery API is temporarily unavailable. Please try your transaction again in a moment.'
  }
}

export default ServiceDiscoveryError
