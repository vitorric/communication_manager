export namespace CommunicationDomain {
  export type Register = {
    to: string;
    title: string;
    html: string;
    files?: Array<{
      path: string;
      name: string;
    }>;
    senderId: any;
  };
}
