import {MailProvider} from ".";

export const Provider = ({children}: Readonly<{children: JSX.Element}>) => {
  return <MailProvider>{children}</MailProvider>;
};
