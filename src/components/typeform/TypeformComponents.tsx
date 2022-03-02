import { PopupButton, Widget } from '@typeform/embed-react';

type ITypeFormInput = {
  formId: string;
  title: string;
  buttonClassName: string;
  titleClassName: string;
};

const TypeFormPopUpButton = (props: ITypeFormInput) => {
  return (
    <PopupButton id={props.formId} className={props.buttonClassName}>
      <h3 className={props.titleClassName}>{props.title}</h3>
    </PopupButton>
  );
};

const TypeFormWidget = (props: ITypeFormInput) => {
  return (
    <Widget id={props.formId} className="h-screen w-screen">
      <h3 className="text-xl font-semibold">{props.title}</h3>
    </Widget>
  );
};

export { TypeFormPopUpButton, TypeFormWidget };
