'use client'
import { useState } from 'react';
import expenseModalStyle from './expenseModal.module.scss';
import { Modal } from 'react-bootstrap';
import { addExpense } from '@/actions';
import { useRouter } from 'next/navigation';

export default function ExpenseModal({users}: {users: TUserData[]}) {
  const router = useRouter();
  const [show, setShow] = useState<boolean>(false);
  const handleShow = (): void => setShow(true);
  const handleClose = (): void => setShow(false);
  const handleSubmitBtn = (): void => {
    handleClose();
    router.refresh();
  };
  return (
    <div className={expenseModalStyle['expense-modal']}>
      <button
        className={expenseModalStyle['expense-modal__show-btn']}
        type="button"
        onClick={handleShow}
      >
        add expense
      </button>
      <Modal show={show} onHide={handleClose}>
        <form action={addExpense}>
          <Modal.Header closeButton>
            <Modal.Title>Add New Expense</Modal.Title>
          </Modal.Header>
          <Modal.Body className={expenseModalStyle['expense-modal__input-group']}>
              <input name='expenseName' type="text" placeholder='tên chi tiêu' />
              <select name="payer">
                <option value="">-Chọn người chi trả-</option>
                {
                  users.map((user) => (
                    <option key={user._id} value={user._id}>{user.displayName}</option>
                  ))
                }
              </select>
              <input name='cost' type="number" placeholder='số tiền'/>
          </Modal.Body>
          <Modal.Footer>
            <button
              type='submit'
              className={expenseModalStyle['expense-modal__submit-btn']}
              onClick={handleSubmitBtn}
            >
              add expense
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </div>
  )
}
