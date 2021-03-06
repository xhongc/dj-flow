const PERIODIC_REG = /^((\*\/)?(([0-5]?\d[,-/])*([0-5]?\d))|\*)[ ]((\*\/)?(([0]?[0-9]|1\d|2[0-3])[,-/])*(([0]?[0-9]|1\d|2[0-3]))|\*)[ ]((\*\/)?((([0-6][,-/])*[0-6])|((mon|tue|wed|thu|fri|sat|sun)[,-/])*(mon|tue|wed|thu|fri|sat|sun))|\*)[ ]((\*\/)?((0?[1-9]|[12]\d|3[01])[,-/])*((0?[1-9]|[12]\d|3[01]))|\*)[ ]((\*\/)?((0?[1-9]|1[0-2])[,-/])*(0?[1-9]|1[0-2])|\*)$/

export {
    PERIODIC_REG
}
