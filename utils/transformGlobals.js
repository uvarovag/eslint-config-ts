export const transformGlobals = (obj) =>
    Object.fromEntries(Object.entries(obj).map(([key, val]) => [key.trim(), val ? 'writable' : 'readonly']))
