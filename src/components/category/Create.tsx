import * as Yup from 'yup';
import { Formik } from 'formik';
import { Form } from 'components/auth/form';
import FieldInput from 'shared/Input';
import ButtonInfo from 'shared/ButtonInfo';
import { useRef } from 'react';
import useCategories from 'services/categories/newCategories';
import toast from 'react-hot-toast';
import { useQueryClient } from 'react-query';

function Create() {
  const closModal = useRef<any>();
  const { mutate } = useCategories();
  const queryClient = useQueryClient();

  const validationSchema = Yup.object().shape({
    category: Yup.string().required('category is required'),
  });

  return (
    <Formik
      validationSchema={validationSchema}
      onSubmit={async ({ category }, actions) => {
        mutate(
          { name: category, is_public: false },
          {
            onSuccess(res) {
            
              toast.success('create is success');
              actions.resetForm();
              closModal.current.click();
              queryClient.invalidateQueries([
                `privateCategories_${res.data.data.user_id}`,
              ]);
            },
            onError(e: any) {
             toast.error(`${actions.setErrors(e.response.data.errors)}`);
            },
          }
        );
      }}
      initialValues={{
        category: '',
      }}
    >
      {() => (
        <div className="flex w-full  justify-center">
          <Form className="flex flex-col items-center gap-3">
            <label className="hidden" ref={closModal} htmlFor="Category" />
            <FieldInput
              name="category"
              className="w-80 "
              type="input"
              value="category"
            />
            <ButtonInfo className="px-16"> send</ButtonInfo>
          </Form>
        </div>
      )}
    </Formik>
  );
}

export default Create;
