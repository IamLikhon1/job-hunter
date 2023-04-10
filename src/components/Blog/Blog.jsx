import React from 'react';

const Blog = () => {
    return (
        <div className='mb-5 p-5'>
            <h1 className='text-6xl text-center underline m-5'>Answer to the questions:</h1>
            <h1 className='text-4xl mt-3 bg-yellow-100 p-3  font-semibold'> Ques 1: When should you use context API?</h1>
            <h2 className='text-2xl mt-3  font-medium'>Answer: Context is primarily used when some data needs to be accessible by many components at different nesting levels.For this context api props we don't use props</h2>

            <h1 className='text-4xl mt-4  bg-yellow-200 p-3  font-semibold'> Ques 2: What is a custom hook?</h1>
            <h2 className='text-2xl mt-4 font-medium'>Answer: A custom hook is a special JavaScript function,A custom hook does not require a specific signature.A custom hook always starts with the name ‘use’ and can be used to call other hooks.
</h2>
            <h1 className='text-4xl mt-4  bg-yellow-100 p-3  font-semibold'> Ques 3: What is useRef?</h1>
            <h2 className='text-2xl mt-4 font-medium'>Answer: The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly.
</h2>
            <h1 className='text-4xl mt-4  bg-yellow-200 p-3   font-semibold'> Ques 4:What is useMemo?</h1>
            <h2 className='text-2xl mt-4  font-medium'>Answer: The useMemo Hook can be used to keep expensive, resource intensive functions from needlessly running
</h2>
            
        </div>
    );
};

export default Blog;