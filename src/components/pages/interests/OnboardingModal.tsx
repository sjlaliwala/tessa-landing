import React from 'react';

import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from '@windmill/react-ui';
import { doc, updateDoc } from 'firebase/firestore';

import { db } from '../../../firebase';

function getFirstName(fullName: string): string | undefined {
  return !fullName ? '' : fullName.split(' ')[0];
}

export default function OnboardingModal(props: any) {
  const { uid, name, onboarded, setOnboarded } = props;

  const handleOnboarded = async () => {
    const userRef = doc(db, 'users', uid);
    await updateDoc(userRef, {
      onboarded: true,
    });
    setOnboarded(true);
  };

  return (
    <Modal isOpen={!onboarded} onClose={handleOnboarded}>
      <ModalHeader className="text-3xl text-blue-400">
        Hi {getFirstName(name)}, welcome to Tessa!
      </ModalHeader>
      <ModalBody className="text-xl text-blue-400">
        On the next page, please fill out some information about your
        professional interests {'&'} goals.
      </ModalBody>
      <ModalBody className="text-xl text-blue-400">
        Onward to the beginning of the climb!
      </ModalBody>
      <ModalFooter>
        <Button
          className="w-full hover:bg-blue-500 bg-blue-600"
          onClick={handleOnboarded}
        >
          Confirm
        </Button>
      </ModalFooter>
    </Modal>
  );
}
