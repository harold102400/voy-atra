import { collection, getDocs, getDoc, addDoc, updateDoc, deleteDoc, doc, query, limit, orderBy, Timestamp } from 'firebase/firestore';
import { db } from '../utils/firebase';

const docRef = (id, colRef) => {
  return doc(db, colRef, id);
};

const getAllAppointments = async (colRef) => {
  const collectionRef = collection(db, colRef);
  const q = query(collectionRef, limit(50), orderBy('createdAt'));
  const data = await getDocs(q);
  return data.docs.map((doc) => ({ ...doc.data(), appointmentId: doc.id }));
};

const getAppointmentById = async (id, colRef) => {
  const docSnap = await getDoc(docRef(id, colRef));
  return docSnap.data();
};

const createAppointment = async (data, colRef) => {
  const collectionRef = collection(db, colRef);
  data.createdAt = Timestamp.fromDate(new Date(Date.now()));
  await addDoc(collectionRef, data);
};

const updateAppointment = async (id, colRef, data) => {
  await updateDoc(docRef(id, colRef), data);
};

const deleteAppointment = async (id, colRef) => {
  await deleteDoc(docRef(id, colRef));
};

const AppointmentService = {
  getAllAppointments,
  getAppointmentById,
  createAppointment,
  updateAppointment,
  deleteAppointment
};

export default AppointmentService;
