// H1
export const H1 = ({ name, className }) => {
  return (
    <>
      <h1
        className={`mob:text-xl tab:text-3xl laptop:text-4xl  desktop:text-5xl text-text-primary-color font-bold ${className}`}
      >
        {name}
      </h1>
    </>
  );
};

// H2
export const H2 = ({ name, className }) => {
  return (
    <>
      <h2
        className={`mob:text-2xl tab:text-3xl laptop:text-3xl  desktop:text-4xl text-text-primary-color font-bold ${className}`}
      >
        {name}
      </h2>
    </>
  );
};

// H3
export const H3 = ({ name, className }) => {
  return (
    <>
      <h3
        className={`mob:text-xl laptop:text-2xl text-text-primary-color font-bold ${className}`}
      >
        {name}
      </h3>
    </>
  );
};

// H4
export const H4 = ({ name, className }) => {
  return (
    <>
      <h4 className={`text-lg text-text-primary-color font-bold ${className}`}>
        {name}
      </h4>
    </>
  );
};

// H5
export const H5 = ({ name, className }) => {
  return (
    <>
      <h5
        className={`mob:text-base tab:text-lg text-text-primary-color font-semibold ${className}`}
      >
        {name}
      </h5>
    </>
  );
};

// H6
export const H6 = ({ name, className }) => {
  return (
    <>
      <h6
        className={`text-base text-text-primary-color font-medium ${className}`}
      >
        {name}
      </h6>
    </>
  );
};

// P
export const P = ({ name, className }) => {
  return (
    <>
      <p
        className={`text-base text-text-secondary-color font-normal ${className}`}
      >
        {name}
      </p>
    </>
  );
};
