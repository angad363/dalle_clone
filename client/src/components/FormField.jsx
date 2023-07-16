import React from 'react'
import PropTypes from 'prop-types';
import { preview } from '../assets';
//import {Loader} from './Loader'

const FormField = ({LabelName, type, name, placeholder, value, 
  handleChange, isSupriseMe, handleSupriseMe, form, generatingImg}) => {
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"        
        >
          {LabelName}
        </label>
        {isSupriseMe && (
          <button
            type="button"
            onClick={handleSupriseMe}
            className='font-semibold text-xs bg-[#ECECF1] py-1 px-2 rounded-[5px] text-black'
          >
            Surprise Me!
          </button>
        )}
      </div>
      <input 
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className='bg-gray-50 border border-gray-300 text-gray-900 
        text-sm rounded-lg focus:ring-[#6469ff] focus:border-[#4649ff] 
        outline-none block w-full p-3'
      />
    </div>
  )
}


FormField.propTypes = {
  LabelName: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  isSupriseMe: PropTypes.bool,
  handleSupriseMe: PropTypes.func,
  form: PropTypes.shape({
    photo: PropTypes.string,
    prompt: PropTypes.string,
  }).isRequired,
  generatingImg: PropTypes.bool
};

export default FormField