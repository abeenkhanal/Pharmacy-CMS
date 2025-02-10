import { useForm } from 'react-hook-form';
import { BannerValidation } from '../Validation/BannerValidation';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import  {UseAxiosPrivate} from '../Auth/axios'

export const UseBannerService = () => {
    const axiosPrivate = UseAxiosPrivate();

    const form = useForm({
        resolver: zodResolver(BannerValidation),
        defaultValues: {
            title: "",
            description: ""
        }
    });

    const mutation = useMutation({
        mutationFn: async (data) => {
            const response = await axiosPrivate.post(`http://192.168.1.128:3000/banner-section`, data);
            return response.data;
        },
        onSuccess: () => {
            form.reset();
            toast.success("Banner added successfully");
        },
        onError: (error) => {
            toast.error(`Error submitting banner form: ${error?.response?.data?.message || "Unknown error"}`);
        }
    });

    const onSubmit = (data) => {
        mutation.mutate(data);
    };

    return { form, onSubmit };
};
