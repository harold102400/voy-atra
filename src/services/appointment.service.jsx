import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc, query, limit, orderBy } from 'firebase/firestore';
import { db } from '../utils/firebase';

const collectionRef = collection(db, 'appointments');

const docRef = (id) => {
  return doc(db, 'appointments', id);
};

const getAllAppointments = async () => {
  const q = query(collectionRef, limit(50), orderBy('createdAt', 'asc'));
  const data = await getDocs(q);
  return data.docs.map((doc) => ({ ...doc.data(), appointmentId: doc.id }));
};

const getAppointmentById = async (id) => {
  const docSnap = await getDoc(docRef(id));
  return docSnap.data();
};

const createAppointment = async (data) => {
  await addDoc(collectionRef, data);
};

const updateAppointment = async (id, data) => {
  await updateDoc(docRef(id), data);
};

const deleteAppointment = async (id) => {
  await deleteDoc(docRef(id));
};

const AppointmentService = {
  getAllAppointments,
  getAppointmentById,
  createAppointment,
  updateAppointment,
  deleteAppointment
};

export default AppointmentService;
