/**
 * @description
 * Internal logger to be used across the application.
 *  
 * @example
 * logger.default("Module", "Message")
 * logger.info("Module", "Message")
 * logger.warn("Module", "Message")
 * logger.error("Module", "Message")
 *  
 * 
 * @param {string} module - Module name where the log is being called.
 * 
 * @param {string} message - Message to be logged. This can be a string or an object.
 * 
 * @returns {void} - Returns nothing as it is a logger.
 * 
 */

// TODO: Add a way to disable log message that is an error in production and warn in development.

export const logger = {
  default: (module, message) => {
    console.log("%c[Internal Log]%c \n \n", "color: rgb(120, 120, 120)", "color: inherit", `${module} \n`, message)
  },
  info: (module: string, message: string) => {
    console.info(`%c[Internal Log | Info 📚]%c ${module}`, "color: rgb(120, 120, 120)", "color: inherit", message)
  },
  warn: (module: string, message: string) => {
    console.warn(`%c[Internal Log | Warning ⚠]%c ${module}`, "color: rgb(120, 120, 120)", "color: inherit", message)
  },
  error: (module: string, message: string) => {
    console.error(`%c[Internal Log | Error 🚨]%c ${module}`, "color: rgb(120, 120, 120)", "color: inherit", message)
  }
} as {
  default: (module: string, message: any) => void,
  info: (module: string, message: any) => void,
  warn: (module: string, message: any) => void,
  error: (module: string, message: any) => void
}




