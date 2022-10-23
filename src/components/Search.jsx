// import { useState } from 'react';

// function Search({ cb = Function.prototype }) {
//   const [value, setValue] = useState('');

//   const handleKey = (e) => {
//     if (e.key === 'Enter') {
//       handleSubmit();
//     }
//   };

//   const handleSubmit = (e) => {
//     cb(value);
//   };

//   return (
//     <div className='search-bar row'>
//       <div className='input-field col s12'>
//         <input
//           type='search' //
//           name='search'
//           id='search-field'
//           placeholder='search'
//           onKeyDown={handleKey}
//           onChange={(e) => setValue(e.target.value)}
//           value={value}
//         />
//         <button className='search-btn btn-small orange' onClick={handleSubmit}>
//           Search category
//         </button>
//       </div>
//     </div>
//   );
// }

// export { Search };
