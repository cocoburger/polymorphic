import React from 'react';

export type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  useAnimation?: boolean;
};
// export type ButtonProps = React.ComponentPropsWithRef<"button">;

export const Button = (props: ButtonProps) => {
  const {children, useAnimation, ...rest} = props;
  if (useAnimation) {
    //... 필요한 로직
  }
  return <button {...rest}>{children}</button>;
};

export default function ButtonWrapper() {
  return (
      <div>
        <Button
            useAnimation={true}
            onClick={() => alert('test')}
            className='btn-default'
            type='submit'
        />
      </div>
  );
}
