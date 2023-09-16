import * as Loader from 'react-loader-spinner';

const Spinner = () => {

  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
        <Loader.Circles />
        <p className='text-lg text-center px-2'>
            Uploading...
        </p>
    </div>
  )
}

export default Spinner