import { PopupButton } from '@typeform/embed-react';

type ITypeFormButton = {
  title: string;
};

const TypeFormPopUpButton = (props: ITypeFormButton) => {
  return (
    <PopupButton
      id="HMTl6pl6"
      className="h-12 px-8 text-white text-2xl shadow p-2 rounded bg-blue-500 hover:bg-blue-400 focus:shadow-outline"
    >
      <h3 className="text-xl font-semibold">{props.title}</h3>
    </PopupButton>
  );
};

export { TypeFormPopUpButton };
