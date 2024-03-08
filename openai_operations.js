import axios from 'axios'; // Importa axios para hacer solicitudes HTTP

export class OpenAIOperations {
    constructor(file_context, openai_key, model_name, history_length) {
        this.messages = [{ role: "system", content: file_context }];
        // Elimina la inicialización de OpenAI, ya que no lo usarás
        // this.openai = new OpenAI({
        //     apiKey: openai_key,
        // });
        this.model_name = model_name;
        this.history_length = history_length;
        this.customEndpoint = 'TU_ENLACE_PERSONALIZADO'; // Ajusta esto con tu enlace personalizado
    }

    // No necesitas check_history_length(), ya que no estás gestionando el historial de mensajes aquí

    async make_openai_call(text) {
        try {
            // Agrega el mensaje del usuario a los mensajes
            this.messages.push({ role: "user", content: text });

            // No es necesario verificar si se excede la longitud del historial

            // Realiza la solicitud a tu enlace personalizado en lugar de a la API de OpenAI
            const response = await axios.post(this.customEndpoint, { text });

            // Devuelve la respuesta directamente, asumiendo que tu enlace personalizado devuelve la respuesta de ChatGPT
            return response.data;
        } catch (error) {
            console.error('Error calling custom endpoint:', error);
            throw error; // Maneja el error según tus necesidades
        }
    }

    async make_openai_call_completion(text) {
        try {
            // Realiza la solicitud a tu enlace personalizado en lugar de a la API de OpenAI
            const response = await axios.post(this.customEndpoint, { text });

            // Devuelve la respuesta directamente, asumiendo que tu enlace personalizado devuelve la respuesta de ChatGPT
            return response.data;
        } catch (error) {
            console.error('Error calling custom endpoint:', error);
            throw error; // Maneja el error según tus necesidades
        }
    }
}
