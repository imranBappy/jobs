const columns = () =>([
  { id: 'name', label: 'Name', minWidth: 170 },
  { 
    id: 'balance', 
    label: 'Balance', 
    minWidth: 100 ,
    format: (value) => value.toFixed(2),
  },
  
  { 
    id: 'email', 
    label: 'Email', 
    minWidth: 100 ,
    format: (value) => value.toFixed(2),
  },

]);

export default columns
