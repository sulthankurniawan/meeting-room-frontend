<template>
    <div class="form-container">
        <h2>Informasi Ruang Meeting</h2>
        <form @submit.prevent="saveForm">
            <div class="form-group">
                <label for="unit">Unit</label>
                <select id="unit" v-model="form.unit" required>
                    <option value="" disabled>Select Unit</option>
                    <option v-for="unit in units" :key="unit" :value="unit">{{ unit }}</option>
                </select>
            </div>

            <div class="form-group">
                <label for="ruang_meeting">Ruang Meeting</label>
                <select id="ruang_meeting" v-model="form.ruang_meeting" @change="updateKapasitas" required>
                    <option value="" disabled>Select Ruang Meeting</option>
                    <option v-for="room in rooms" :key="room.id" :value="room.name">{{ room.name }}</option>
                </select>
            </div>

            <div class="form-group">
                <label for="kapasitas">Kapasitas</label>
                <input id="kapasitas" v-model="form.kapasitas" type="text" readonly />
            </div>

            <div class="form-group">
                <label for="tanggal_rapat">Tanggal Rapat</label>
                <input id="tanggal_rapat" v-model="form.tanggal_rapat" type="date" required />
            </div>

            <div class="form-group">
                <label for="waktu_mulai">Waktu Mulai</label>
                <select id="waktu_mulai" v-model="form.waktu_mulai" required>
                    <option value="" disabled>Select Start Time</option>
                    <option v-for="time in schedules" :key="time" :value="time">{{ time }}</option>
                </select>
            </div>

            <div class="form-group">
                <label for="waktu_selesai">Waktu Selesai</label>
                <select id="waktu_selesai" v-model="form.waktu_selesai" required>
                    <option value="" disabled>Select End Time</option>
                    <option v-for="time in schedules" :key="time" :value="time">{{ time }}</option>
                </select>
            </div>

            <div class="form-group">
                <label for="jumlah_peserta">Jumlah Peserta</label>
                <input id="jumlah_peserta" v-model.number="form.jumlah_peserta" type="number" required />
            </div>

            <div class="form-group">
                <label>Jenis Konsumsi</label>
                <div v-for="konsumsi in konsumsiOptions" :key="konsumsi">
                    <input type="checkbox" :value="konsumsi" v-model="form.jenis_konsumsi" />
                    <label>{{ konsumsi }}</label>
                </div>
            </div>

            <div class="form-group">
                <label for="nominal_konsumsi">Nominal Konsumsi</label>
                <input id="nominal_konsumsi" v-model.number="form.nominal_konsumsi" type="number" required />
            </div>

            <div class="form-actions">
                <button type="submit">Save</button>
                <button type="button" @click="cancelForm">Cancel</button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            form: {
                unit: '',
                ruang_meeting: '',
                kapasitas: '',
                tanggal_rapat: '',
                waktu_mulai: '',
                waktu_selesai: '',
                jumlah_peserta: 0,
                jenis_konsumsi: [],
                nominal_konsumsi: 0,
            },
            units: ['Unit A', 'Unit B', 'Unit C'],
            rooms: [
                { id: 1, name: 'Room 1', kapasitas: 10 },
                { id: 2, name: 'Room 2', kapasitas: 20 },
                { id: 3, name: 'Room 3', kapasitas: 30 },
            ],
            schedules: [
                '08:00', '08:30', '09:00', '09:30', '10:00',
                '10:30', '11:00', '11:30', '12:00', '12:30',
                '13:00', '13:30', '14:00', '14:30', '15:00',
                '15:30', '16:00', '16:30', '17:00',
            ],
            konsumsiOptions: ['Snack Siang', 'Makan Siang', 'Snack Sore'],
        };
    },
    methods: {
        updateKapasitas() {
            const selectedRoom = this.rooms.find((room) => room.name === this.form.ruang_meeting);
            this.form.kapasitas = selectedRoom ? selectedRoom.kapasitas : '';
        },
        async saveForm() {
            try {
                const response = await axios.post('http://localhost:5000/api/meetings', this.form);
                console.log('Form saved successfully:', response.data);
                this.cancelForm();
            } catch (error) {
                console.error('Error saving form:', error);
            }
        },
        cancelForm() {
            this.form = {
                unit: '',
                ruang_meeting: '',
                kapasitas: '',
                tanggal_rapat: '',
                waktu_mulai: '',
                waktu_selesai: '',
                jumlah_peserta: 0,
                jenis_konsumsi: [],
                nominal_konsumsi: 0,
            };
        },
    },
};
</script>

<style scoped>
.form-container {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background: #fff;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
}

input,
select {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.form-actions {
    display: flex;
    justify-content: space-between;
}

button {
    padding: 10px 15px;
    border: none;
    background-color: #4caf50;
    color: white;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}
</style>
