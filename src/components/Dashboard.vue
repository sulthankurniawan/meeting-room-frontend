<template>
    <div class="dashboard">
        <h2>Ruang Meeting</h2>
        <button @click="redirectToForm">Pesan Ruangan</button>
        <table>
            <thead>
                <tr>
                    <th>Unit</th>
                    <th>Ruang Meeting</th>
                    <th>Kapasitas</th>
                    <th>Tanggal Rapat</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="meeting in meetings" :key="meeting.id">
                    <td>{{ meeting.unit }}</td>
                    <td>{{ meeting.ruang_meeting }}</td>
                    <td>{{ meeting.kapasitas }}</td>
                    <td>{{ meeting.tanggal_rapat }}</td>
                </tr>
                <tr v-if="meetings.length === 0">
                    <td colspan="4" class="empty-state">No meetings scheduled</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            meetings: [],
        };
    },
    methods: {
        redirectToForm() {
            this.$router.push('/input-form');
        },
    },
    mounted() {
        axios.get('http://localhost:5000/api/meetings')
            .then((res) => {
                this.meetings = res.data;
            })
            .catch((error) => {
                console.error('Error fetching meetings:', error);
            });
    },
};
</script>

<style scoped>
.dashboard {
    padding: 20px;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
}

th,
td {
    padding: 10px;
    border: 1px solid #ddd;
    text-align: left;
}

th {
    background-color: #4CAF50;
    color: white;
}

tr:nth-child(even) {
    background-color: #f2f2f2;
}

.empty-state {
    text-align: center;
    padding: 20px;
    color: #888;
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