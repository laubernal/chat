export type Primitives = string | boolean | number | Date | null;

export type participantType = {
  id: string;
  name: string;
  phone: string;
};

export type messageType = {
  id: string;
  message: string;
  messageType: string;
  sender: participantType;
  recipients: participantType[];
};
