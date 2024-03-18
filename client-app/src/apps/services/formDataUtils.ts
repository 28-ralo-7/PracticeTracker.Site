const buildFormData = (formData: FormData, data: any, parentKey: string = '') => {
    if (data && typeof data === 'object' && !(data instanceof Date) && !(data instanceof File)) {
        Object.keys(data).forEach(key => {
            buildFormData(formData, data[key], parentKey ? `${parentKey}[${key}]` : key);
        });
    } else {
        if (data instanceof Date) {
            const value = data === null ? '' : getDateWithoutTimezoneOffset(data);
            formData.append(parentKey, value);
        } else {
            const value = data === null ? '' : data;
            formData.append(parentKey, value);
        }
    }
}

export const getDateWithoutTimezoneOffset = (date: Date) => {
    const numberTicksPerHour = 60000;
    let ticksTimezoneOffset = date.getTimezoneOffset() * numberTicksPerHour;
    return new Date(date.getTime() - ticksTimezoneOffset).toISOString();
}

export const objectToFormData = (data: any) => {
    const formData = new FormData();
    buildFormData(formData, data);
    return formData;
}